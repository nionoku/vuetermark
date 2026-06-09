<template>
  <g :style="{ transform }">
    <defs v-if="isColorIsGradient">
      <LinearGradient v-if="colorLinearGradient" :model-value="colorLinearGradient" :id="'gradient_' + element.id" />
      <RadialGradient v-if="colorRadialGradient" :model-value="colorRadialGradient" :id="'gradient_' + element.id" />
    </defs>

    <g v-for="instance in instances" :key="instance.key" class="watermark-element"
      :style="{ transform: instance.offsetTransform }">
      <g class="watermark-element" :style="getInstanceInnerTransformStyle(element, instance.key)">
        <text text-anchor="middle" :letter-spacing="element.letterSpacing"
          :style="{ fill, opacity: element.opacity, textShadow: element.shadow, filter: element.filter }">
          {{ element.label }}
        </text>
      </g>
    </g>
  </g>
</template>

<script lang="ts" setup>
import { computed, toRef } from 'vue';
import { WatermarkElement } from '../../stores/watermark-elements/types/watermark-element';
import { useTransform } from './composable/use-transform';
import { useMultiplier } from './composable/use-multiplier';
import { getInstanceInnerTransformStyle } from './composable/use-instance-inner-transform';
import LinearGradient from './linear-gradient/linear-gradient.vue';
import RadialGradient from './radial-gradient/radial-gradient.vue';
import { useGradientRepresentation } from './composable/use-gradient-representation';

const element = defineModel<WatermarkElement>({
  required: true
});

const { transform } = useTransform(element)
const { instances } = useMultiplier(element)
const {
  isColorIsGradient,

  colorLinearGradient,
  colorRadialGradient
} = useGradientRepresentation(toRef(element.value.color))

const fill = computed(() => {
  if (typeof element.value.color === 'string' && CSS.supports('color', element.value.color)) {
    return element.value.color
  } else if (isColorIsGradient.value) {
    return `url('#gradient_${element.value.id}')`
  }
})
</script>
