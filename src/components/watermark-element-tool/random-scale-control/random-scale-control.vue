<template>
  <RangeControl :model-value="randomScale" @update:model-value="whenChangeRandomScale" label="Random scale"
    name="random-scale" :min="0" :max="2" :step="0.1" />
</template>

<script lang="ts" setup>
import RangeControl from '../../_ui/range-control/range-control.vue';
import { WatermarkElement } from '../../../stores/watermark-elements/types/watermark-element';

const randomScale = defineModel<WatermarkElement['randomScale']>({
  required: true
})

const whenChangeRandomScale = (value: number) => {
  return randomScale.value = Math.round(value * 10) / 10
}

</script>
