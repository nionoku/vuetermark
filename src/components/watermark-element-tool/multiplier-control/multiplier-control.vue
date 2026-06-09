<template>
  <div :class="[styles.container]">
    <span :class="[styles.label]">
      Multiplier
    </span>

    <RangeControl :model-value="multiplier[0]" @update:model-value="whenChangeByX" label="X (by horizontal)"
      name="multiplier-x" :min="0" :max="10" :step="1" />

    <RangeControl :model-value="multiplier[1]" @update:model-value="whenChangeByY" label="Y (by vertical)"
      name="multiplier-y" :min="0" :max="10" :step="1" />

    <RangeControl :model-value="multiplierGap[0]" @update:model-value="whenChangeGapByX" label="Gap X (by horizontal)"
      name="multiplier-gap-x" :min="10" :max="300" :step="5" />

    <RangeControl :model-value="multiplierGap[1]" @update:model-value="whenChangeGapByY" label="Gap Y (by vertical)"
      name="multiplier-gap-y" :min="10" :max="300" :step="5" />
  </div>
</template>

<script lang="ts" setup>
import RangeControl from '../../_ui/range-control/range-control.vue';
import { WatermarkElement } from '../../../stores/watermark-elements/types/watermark-element';
import styles from './index.module.css'

const multiplier = defineModel<WatermarkElement['multiplier']>('multiplier', {
  required: true
})

const multiplierGap = defineModel<WatermarkElement['multiplierGap']>('multiplierGap', {
  required: true
})

const whenChangeByX = (value: number) => {
  return multiplier.value[0] = Math.round(value)
}

const whenChangeByY = (value: number) => {
  return multiplier.value[1] = Math.round(value)
}

const whenChangeGapByX = (value: number) => {
  return multiplierGap.value[0] = Math.round(value)
}

const whenChangeGapByY = (value: number) => {
  return multiplierGap.value[1] = Math.round(value)
}

</script>
