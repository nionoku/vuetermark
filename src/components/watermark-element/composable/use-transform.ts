import { Ref, computed } from "vue"
import { WatermarkElement } from "../../../stores/watermark-elements/types/watermark-element"

const useTransform = (element: Ref<WatermarkElement>) => {
  const toPositionValue = (value: number) => value + '%'
  const toRotationValue = (value: number) => value + 'deg'

  const transform = computed(() => {
    const transforms = {
      translate: element.value.position
        .map(toPositionValue),
      rotate: toRotationValue(element.value.rotation),
      scale: element.value.scale
    }
  
    return Object.entries(transforms)
      // from '{ key: [value, value] }' to 'key(value, value)' 
      .map(([key, values]) => `${key}(${Array.isArray(values) ? values.join(', ') : values})`)
      .join(' ')
  })

  return {
    transform
  }
}

export {
  useTransform
}