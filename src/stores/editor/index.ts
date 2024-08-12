import { defineStore } from "pinia";
import { shallowRef } from "vue";
import { EditorState } from "./constants/state-enum";

const useEditorStore = defineStore('editor', () => {
  const state = shallowRef<EditorState>(EditorState.WAIT_FILE);
  
  const _photo = shallowRef<HTMLImageElement>()
  const setPhoto = (photo: HTMLImageElement) => {
    _photo.value = photo

    state.value = EditorState.EDITING
  }

  return {
    state,

    setPhoto,
    photo: _photo,
  }
})

export {
  useEditorStore
}