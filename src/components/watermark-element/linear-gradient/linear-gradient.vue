<template>
  <linearGradient :gradient-transform="color?.angle">
    <stop v-for="color, index in color?.colors" :key="index" :offset="color.offset" :stop-color="color.color"></stop>
  </linearGradient>
</template>

<script lang="ts" setup>
import { GradientRepresentation, LinearGradientRepresentation } from '../../../stores/watermark-elements/types/gradient-representation';

const color = defineModel<GradientRepresentation & LinearGradientRepresentation>({
  required: true
});

</script>