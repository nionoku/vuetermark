const toDataUri = (svg: SVGElement) => {
  return 'data:image/svg+xml;base64,' + btoa(svg.outerHTML)
}

const getCanvas = (origin: HTMLImageElement): [HTMLCanvasElement, CanvasRenderingContext2D] => {
  const canvas = document.createElement('canvas')

  canvas.width = origin.width
  canvas.height = origin.height

  const context = canvas.getContext('2d')

  if (!context) {
    throw new Error('Canvas context 2d is unsupported')
  }

  return [canvas, context]
}

/** Method transform svg watermark and return base64 of png */
const getImage = (origin: string | undefined, svg: SVGElement | undefined): Promise<string> => {
  if (!origin) {
    throw new Error('Origin is undefined')
  }
  
  if (!svg) {
    throw new Error('SVG is undefined')
  }

  return Promise.all([
    new Promise<HTMLImageElement>((resolve) => {
      const image = new Image()
      image.addEventListener('load', () => resolve(image))
      image.src = origin
    }),
    new Promise<HTMLImageElement>((resolve) => {
      const image = new Image()
      image.addEventListener('load', () => resolve(image))
      image.src = toDataUri(svg)
    }),
  ])
    .then(([origin, watermark]) => {
      const [canvas, context] = getCanvas(origin)

      context.drawImage(origin, 0, 0, origin.width, origin.height)
      context.drawImage(watermark, 0, 0, origin.width, origin.height)

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