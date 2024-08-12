const loadPhoto = (file: File): Promise<HTMLImageElement> => {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image()
    image.addEventListener('load', () => {
      resolve(image)
    })
    image.addEventListener('error', () => {
      reject(new Error('Failed to load image'))
    })
    image.src = URL.createObjectURL(file)
  })
}

export {
  loadPhoto
}