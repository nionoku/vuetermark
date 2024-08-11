<template>
  <g :data-watermark="element.id" :style="{ transform }">
    <defs v-if="isColorIsGradient">
      <LinearGradient v-if="colorLinearGradient" :model-value="colorLinearGradient" :id="'gradient_' + element.id" />
      <RadialGradient v-if="colorRadialGradient" :model-value="colorRadialGradient" :id="'gradient_' + element.id" />
    </defs>

    <text text-anchor="middle" :letter-spacing="element.letterSpacing" :style="{ fill, opacity: element.opacity }">
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

const element = defineModel<WatermarkElement>({
  required: true
});

const { transform } = useTransform(element)

const colorLinearGradient = computed(() => {
  if (typeof element.value.color === 'object' && element.value.color?.type === 'linear-gradient') {
    return element.value.color
  }
})
const colorRadialGradient = computed(() => {
  if (typeof element.value.color === 'object' && element.value.color?.type === 'radial-gradient') {
    return element.value.color
  }
})
const isColorIsGradient = computed(() => colorLinearGradient.value || colorRadialGradient.value)

const fill = computed(() => {
  if (typeof element.value.color === 'string' && CSS.supports('color', element.value.color)) {
    return element.value.color
  } else if (isColorIsGradient.value) {
    return `url('#gradient_${element.value.id}')`
  }
})
</script>