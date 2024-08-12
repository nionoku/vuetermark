const toDataUri = (svg: SVGElement) => {
  return 'data:image/svg+xml;base64,' + btoa(svg.outerHTML)
}

const createCanvas = (width: number, height: number): [HTMLCanvasElement, CanvasRenderingContext2D] => {
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
      
      image.width = svg.clientWidth
      image.height = svg.clientHeight
      
      image.src = toDataUri(svg)
    }),
    new Promise<HTMLImageElement>((resolve) => {
      const image = new Image()
      image.addEventListener('load', () => resolve(image))
      image.src = originLink
    }),
  ])
    .then(([watermark, origin]) => {
      const [wCanvas, wContext] = createCanvas(watermark.width, watermark.height)
      const [oCanvas, oContext] = createCanvas(origin.width, origin.height)
      
      // draw in svg size
      wContext.drawImage(origin, 0, 0, watermark.width, watermark.height)
      wContext.drawImage(watermark, 0, 0, watermark.width, watermark.height)
      // resize to original scale
      oContext.drawImage(wCanvas, 0, 0, origin.width, origin.height)

      return oCanvas
    })
    .then((canvas) => {
      return canvas.toDataURL('image/png', 1.0)
    })

}

export {
  getImage
}