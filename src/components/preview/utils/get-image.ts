const getImage = (svg: SVGElement | undefined): Blob => {
  if (!svg) {
    throw new Error('SVG is undefined')
  }

  // TODO (2024.08.10): Implement getting blob (png) from svg via canvas
  throw new Error('Not implemented')
}

export {
  getImage
}