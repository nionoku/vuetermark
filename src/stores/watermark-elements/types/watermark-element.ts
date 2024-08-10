import { GradientRepresentation } from "./gradient-representation"

type WatermarkElement = {
  id: number
  label: string

  /** @description position in percents */
  position: [number, number]
  /** @description rotation in degrees */
  rotation: [number]
  scale: [number, number]
  color: string | GradientRepresentation | null
}

export type {
  WatermarkElement
}