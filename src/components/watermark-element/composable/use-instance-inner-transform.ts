import { CSSProperties } from "vue"
import { WatermarkElement } from "../../../stores/watermark-elements/types/watermark-element"
import { getInstanceRandomRotation } from "./use-random-rotation"
import { getInstanceRandomScale } from "./use-random-scale"

const getInstanceInnerTransformStyle = (
  element: WatermarkElement,
  instanceKey: string,
): CSSProperties | undefined => {
  const transforms: string[] = []
  const rotation = getInstanceRandomRotation(element, instanceKey)
  const scale = getInstanceRandomScale(element, instanceKey)

  if (rotation !== 0) {
    transforms.push(`rotate(${rotation}deg)`)
  }

  if (scale !== 1) {
    transforms.push(`scale(${scale}, ${scale})`)
  }

  if (!transforms.length) {
    return undefined
  }

  return {
    transform: transforms.join(' '),
  }
}

export {
  getInstanceInnerTransformStyle
}
