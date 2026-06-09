import { Ref, computed } from "vue"
import { WatermarkElement } from "../../../stores/watermark-elements/types/watermark-element"

type MultiplierInstance = {
  key: string
  offsetX: number
  offsetY: number
  offsetTransform: string | undefined
}

const toOffsetTransform = (offsetX: number, offsetY: number, gapX: number, gapY: number) => {
  if (offsetX === 0 && offsetY === 0) {
    return undefined
  }

  return `translate(${offsetX * gapX}%, ${offsetY * gapY}%)`
}

const useMultiplier = (element: Ref<WatermarkElement>) => {
  const instances = computed<MultiplierInstance[]>(() => {
    const [multiplierX, multiplierY] = element.value.multiplier
    const [gapX, gapY] = element.value.multiplierGap
    const result: MultiplierInstance[] = []

    for (let offsetY = -multiplierY; offsetY <= multiplierY; offsetY++) {
      for (let offsetX = -multiplierX; offsetX <= multiplierX; offsetX++) {
        result.push({
          key: `${offsetX}_${offsetY}`,
          offsetX,
          offsetY,
          offsetTransform: toOffsetTransform(offsetX, offsetY, gapX, gapY)
        })
      }
    }

    return result
  })

  return {
    instances
  }
}

export {
  useMultiplier
}

export type {
  MultiplierInstance
}
