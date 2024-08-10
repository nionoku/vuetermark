<template>
  <div :class="[styles.container]">
    <span :class="[styles.label]">
      Position
    </span>

    <RangeControl :model-value="position[0]" @update:model-value="whenChangeByX" label="X (by horizontal)"
      name="position-x" :min="0" :max="100" :step="1" />

    <RangeControl :model-value="position[1]" @update:model-value="whenChangeByY" label="Y (by vertical)"
      name="position-y" :min="0" :max="100" :step="1" />
  </div>
</template>

<script lang="ts" setup>
import RangeControl from '../../_ui/range-control/range-control.vue';
import { WatermarkElement } from '../../../stores/watermark-elements/types/watermark-element';
import styles from './index.module.css'

const position = defineModel<WatermarkElement['position']>({
  required: true
})

const whenChangeByX = (value: number) => {
  return position.value[0] = Math.round(value)
}

const whenChangeByY = (value: number) => {
  return position.value[1] = Math.round(value)
}

</script>