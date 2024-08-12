import { defineStore } from "pinia";
import { ref } from "vue";
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
  const createBlankElement = () => {
    return appendElement({
      label: '',
  
      position: [50, 50],
      rotation: 0,
      scale: [1, 1],
      color: '',
      opacity: 1,
  
      letterSpacing: 1,

      shadow: '',
      filter: ''
    })
  }

  const _selectedElement = ref<WatermarkElement | undefined>()
  const setSelectedElement = (element: WatermarkElement | undefined): WatermarkElement | undefined => {
    if (!element) {
      return _selectedElement.value = undefined
    }
    
    if (!elements.value.includes(element)) {
      throw new Error('Before select element, append it to elements')
    }

    return _selectedElement.value = element
  }
  const createElementAndSelect = () => {
    setSelectedElement(createBlankElement())
  }
  const removeSelectedElement = () => {
    if (_selectedElement.value) {
      const index = elements.value.indexOf(_selectedElement.value)

      if (index === -1) {
        return
      }

      elements.value.splice(index, 1)
      setSelectedElement(undefined)
    }
  }

  return {
    elements,
    appendElement,
    createBlankElement,

    selectedElement: _selectedElement,
    setSelectedElement,
    createElementAndSelect,
    removeSelectedElement,
  }
})

export {
  useWatermarkElementsStore
}