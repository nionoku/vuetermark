import { computed } from "vue"
import { WatermarkElement } from "../../../stores/watermark-elements/types/watermark-element"

const useGradientRepresentation = (color: WatermarkElement['color']) => {
  const colorLinearGradient = computed(() => {
    if (typeof color === 'object' && color.type === 'linear-gradient') {
      return color
    }
  })

  const colorRadialGradient = computed(() => {
    if (typeof color === 'object' && color.type === 'radial-gradient') {
      return color
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