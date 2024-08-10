<template>
  <radialGradient>
    <stop v-for="color, index in color?.colors" :key="index" :offset="color.offset" :stop-color="color.color"></stop>
  </radialGradient>
</template>

<script lang="ts" setup>
import { GradientRepresentation, RadialGradientRepresentation } from '../../../stores/watermark-elements/types/gradient-representation';

const color = defineModel<GradientRepresentation & RadialGradientRepresentation>({
  required: true
});

</script>