import { defineStore } from "pinia";
import { computed, ref, shallowRef } from "vue";
import { WatermarkElement } from "./types/watermark-element";


const useWatermarkElementsStore = defineStore('watermark-elements', () => {
  let _nextElementId = 1

  const elements = ref<WatermarkElement[]>([])
  const appendElement = (element: Omit<WatermarkElement, 'id'>) => {
    const elementWithId = {
      ...element,
      id: _nextElementId++
    }

    elements.value.push(elementWithId)

    return elementWithId
  }

  const _selectedElementIndex = shallowRef<number>(-1)
  const setSelectedElement = (element: WatermarkElement | null): number => {
    if (!element) {
      return _selectedElementIndex.value = -1
    }
    
    const index = elements.value.indexOf(element)

    if (index < 0) {
      throw new Error('Before select element, append it to elements')
    }

    return _selectedElementIndex.value = index
  }

  const selectedElement = computed<WatermarkElement | undefined>(() => {
    return elements.value[_selectedElementIndex.value]
  })

  return {
    elements,
    appendElement,

    selectedElement,
    setSelectedElement,
  }
})

export {
  useWatermarkElementsStore
}