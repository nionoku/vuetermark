import { useEditorStore } from "../../../stores/editor"

const usePickFile = (files: FileList | null) => {
  if (!files) {
    // TODO (2024.08.10): Show error dialog
    throw new Error('Files is undefined')
  }

  const file = files[0]

  if (!file) {
    // TODO (2024.08.10): Show error dialog
    throw new Error('File is undefined')
  }

  // TODO (2024.08.10): Check file type

  const { setPhoto } = useEditorStore()

  setPhoto(file)
}

export {
  usePickFile
}