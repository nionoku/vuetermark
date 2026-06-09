import { GradientRepresentation } from "./gradient-representation"

type WatermarkElement = {
  id: number
  label: string

  /** @description position in percents */
  position: [number, number]
  /** @description rotation in degrees */
  rotation: number
  scale: [number, number]
  /** @description count of duplicates on each side along the axis */
  multiplier: [number, number]
  /** @description spacing between adjacent duplicates in percents of element size */
  multiplierGap: [number, number]
  /** @description max random rotation angle in degrees for each descendant, 0 disables */
  randomRotation: number
  /** @description max random scale deviation for each descendant, 0 disables */
  randomScale: number
  color: string | GradientRepresentation
  opacity: number

  letterSpacing: number

  shadow: string
  filter: string
}

export type {
  WatermarkElement
}