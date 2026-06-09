import { WatermarkElement } from "../../../stores/watermark-elements/types/watermark-element"
import { hashString } from "./hash-string"

const getInstanceRandomRotation = (
  element: WatermarkElement,
  instanceKey: string,
) => {
  if (element.randomRotation <= 0) {
    return 0
  }

  const seed = hashString(`${element.id}:${instanceKey}:rotation`)
  const direction = seed % 2 === 0 ? 1 : -1
  const angleRatio = (seed % 1000) / 1000

  return direction * angleRatio * element.randomRotation
}

export {
  getInstanceRandomRotation
}
