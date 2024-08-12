import { useEditorStore } from "../../../stores/editor"

const usePickFile = async (files: FileList | null) => {
  const file = files?.[0]

  if (!file) {
    // TODO (2024.08.10): Show error dialog
    throw new Error('File is undefined')
  }

  // TODO (2024.08.10): Check file type

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
    .then((image) => {
      const { setPhoto } = useEditorStore()
      setPhoto(image)
    })
}

export {
  usePickFile
}