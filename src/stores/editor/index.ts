import { defineStore } from "pinia";
import { computed, shallowRef } from "vue";
import { EditorState } from "./constants/state-enum";

const useEditorStore = defineStore('editor', () => {
  const state = shallowRef<EditorState>(EditorState.WAIT_FILE);
  
  const _photo = shallowRef<Blob>()
  const setPhoto = (photo: Blob) => {
    _photo.value = photo

    state.value = EditorState.EDITING
  }

  const photoLink = computed(() => {
    if (!_photo.value) {
      return undefined
    }

    return URL.createObjectURL(_photo.value)
  })

  return {
    state,

    setPhoto,
    photoLink,
  }
})

export {
  useEditorStore
}