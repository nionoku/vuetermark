import { GradientRepresentation } from "../../../../stores/watermark-elements/types/gradient-representation";

const parseColor = (color: string): string | GradientRepresentation | null => {
  try {
    const matchGradient = color.match(/(linear-gradient|radial-gradient)\((.+)\)/)

    if (matchGradient) {
      const type = matchGradient[1] as GradientRepresentation['type']
      const angle = matchGradient[2]
        .split(', ')[0]
      const colors = matchGradient[2]
        .split(', ')
        .slice(1)
        .map(value => {
          const [color, offset] = value.split(' ')

          return {
            color,
            offset,
          } satisfies GradientRepresentation['colors'][number]
        })

      if (type === 'linear-gradient') {
        return {
          type,
          colors,
          angle: parseInt(angle),
        }
      }

      return {
        type,
        colors
      }
    }

    return color
  } catch (err) {
    return null;
  }
}

export {
  parseColor
}