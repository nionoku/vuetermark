import { useEditorStore } from "../../../stores/editor"

const usePickFile = async (files: FileList | null) => {
  const file = files?.[0]

  if (!file) {
    // TODO (2024.08.10): Show error dialog
    throw new Error('File is undefined')
  }

  // TODO (2024.08.10): Check file type

  await useEditorStore()
    .setFile(file)

  return file
}

export {
  usePickFile
}