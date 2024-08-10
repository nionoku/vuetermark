import { defineStore } from "pinia";
import { computed, ref, shallowRef } from "vue";
import { WatermarkElement } from "./types/watermark-element";

const useWatermarkElementsStore = defineStore('watermark-elements', () => {
  const elements = ref<WatermarkElement[]>([])
  const selectedElementIndex = shallowRef<number | null>(null)

  const selectedElement = computed<WatermarkElement | undefined>(() => {
    if (typeof selectedElementIndex.value !== 'number') {
      return undefined
    }

    return elements.value[selectedElementIndex.value]
  })

  return {
    elements,

    selectedElement,
    selectedElementIndex,
  }
})

export {
  useWatermarkElementsStore
}