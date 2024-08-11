const toDataUri = (svg: SVGElement) => {
  return 'data:image/svg+xml;base64,' + btoa(svg.outerHTML)
}

const getCanvas = (width: number, height: number): [HTMLCanvasElement, CanvasRenderingContext2D] => {
  const canvas = document.createElement('canvas')

  canvas.width = width
  canvas.height = height

  const context = canvas.getContext('2d')

  if (!context) {
    throw new Error('Canvas context 2d is unsupported')
  }

  return [canvas, context]
}

/** Method transform svg watermark and return base64 of png */
const getImage = (svg: SVGElement | undefined, originLink: string | undefined): Promise<string> => {
  if (!svg) {
    throw new Error('SVG is undefined')
  }

  if (!originLink) {
    throw new Error('Origin URL is undefined')
  }

  return Promise.all([
    new Promise<HTMLImageElement>((resolve) => {
      const image = new Image()
      image.addEventListener('load', () => resolve(image))
      image.src = toDataUri(svg)
    }),
    new Promise<HTMLImageElement>((resolve) => {
      const image = new Image()
      image.addEventListener('load', () => resolve(image))
      image.src = originLink
    }),
  ])
    .then(([watermark, origin]) => {
      const { width, height } = origin
      const [canvas, context] = getCanvas(width, height)

      context.drawImage(origin, 0, 0, width, height)
      context.drawImage(watermark, 0, 0, width * (watermark.width / width), height * (watermark.height / height))

      return canvas
    })
    .then(canvas => {
      document.body.appendChild(canvas)

      return canvas
    })
    .then((canvas) => {
      return canvas.toDataURL('image/png', 1.0)
    })

}

export {
  getImage
}