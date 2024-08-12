import { computed, Ref } from "vue"
import { WatermarkElement } from "../../../stores/watermark-elements/types/watermark-element"

const useGradientRepresentation = (color: Ref<WatermarkElement['color']>) => {
  const colorLinearGradient = computed(() => {
    if (typeof color.value === 'object' && color.value.type === 'linear-gradient') {
      return color.value
    }
  })

  const colorRadialGradient = computed(() => {
    if (typeof color.value === 'object' && color.value.type === 'radial-gradient') {
      return color.value
    }
  })

  const isColorIsGradient = computed(() => colorLinearGradient.value || colorRadialGradient.value)

  return {
    colorLinearGradient,
    colorRadialGradient,
    isColorIsGradient
  }
}

export {
  useGradientRepresentation
}