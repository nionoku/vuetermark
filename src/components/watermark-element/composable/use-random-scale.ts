import { WatermarkElement } from "../../../stores/watermark-elements/types/watermark-element"
import { hashString } from "./hash-string"

const getInstanceRandomScale = (
  element: WatermarkElement,
  instanceKey: string,
) => {
  if (element.randomScale <= 0) {
    return 1
  }

  const seed = hashString(`${element.id}:${instanceKey}:scale`)
  const direction = seed % 2 === 0 ? 1 : -1
  const scaleRatio = (seed % 1000) / 1000
  const scale = 1 + direction * scaleRatio * element.randomScale

  return Math.max(0.1, scale)
}

export {
  getInstanceRandomScale
}
