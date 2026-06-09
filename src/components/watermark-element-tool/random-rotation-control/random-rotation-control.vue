<template>
  <RangeControl :model-value="randomRotation" @update:model-value="whenChangeRandomRotation" label="Random rotation"
    name="random-rotation" :min="0" :max="180" :step="1" />
</template>

<script lang="ts" setup>
import RangeControl from '../../_ui/range-control/range-control.vue';
import { WatermarkElement } from '../../../stores/watermark-elements/types/watermark-element';

const randomRotation = defineModel<WatermarkElement['randomRotation']>({
  required: true
})

const whenChangeRandomRotation = (value: number) => {
  return randomRotation.value = Math.round(value)
}

</script>
