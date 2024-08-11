<template>
  <g :data-watermark="element.id" :style="{ transform }">
    <defs v-if="isColorIsGradient">
      <LinearGradient v-if="colorLinearGradient" :model-value="colorLinearGradient" :id="'gradient_' + element.id" />
      <RadialGradient v-if="colorRadialGradient" :model-value="colorRadialGradient" :id="'gradient_' + element.id" />
    </defs>

    <text text-anchor="middle" :letter-spacing="element.letterSpacing"
      :style="{ fill, opacity: element.opacity, textShadow: element.shadow, filter: element.filter }">
      {{ element.label }}
    </text>
  </g>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { WatermarkElement } from '../../stores/watermark-elements/types/watermark-element';
import { useTransform } from './composable/use-transform';
import LinearGradient from './linear-gradient/linear-gradient.vue';
import RadialGradient from './radial-gradient/radial-gradient.vue';
import { useGradientRepresentation } from './composable/use-gradient-representation';

const element = defineModel<WatermarkElement>({
  required: true
});

const { transform } = useTransform(element)
const {
  isColorIsGradient,

  colorLinearGradient,
  colorRadialGradient
} = useGradientRepresentation(element.value.color)

const fill = computed(() => {
  if (typeof element.value.color === 'string' && CSS.supports('color', element.value.color)) {
    return element.value.color
  } else if (isColorIsGradient.value) {
    return `url('#gradient_${element.value.id}')`
  }
})
</script>