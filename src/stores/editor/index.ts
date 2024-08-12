import { defineStore } from "pinia";
import { shallowRef } from "vue";
import { EditorState } from "./constants/state-enum";
import { loadPhoto } from "./utils/load-photo";

const useEditorStore = defineStore('editor', () => {
  const state = shallowRef<EditorState>(EditorState.WAIT_FILE);
  
  const _photo = shallowRef<HTMLImageElement>()
  const _file = shallowRef<File>()

  const setFile = async (file: File) => {
    _file.value = file
    _photo.value = await loadPhoto(file)

    state.value = EditorState.EDITING
  }

  return {
    state,

    photo: _photo,
    file: _file,
    setFile,
  }
})

export {
  useEditorStore
}