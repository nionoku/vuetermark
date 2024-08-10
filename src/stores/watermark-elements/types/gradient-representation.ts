type ColorDescription = {
  offset: string
  color: string
}

type LinearGradientRepresentation = {
  type: 'linear-gradient'
  angle: number
}

type RadialGradientRepresentation = {
  type: 'radial-gradient'
}

type GradientRepresentation = {
  colors: ColorDescription[]
} & (LinearGradientRepresentation | RadialGradientRepresentation)

export type {
  GradientRepresentation,
  LinearGradientRepresentation,
  RadialGradientRepresentation
}