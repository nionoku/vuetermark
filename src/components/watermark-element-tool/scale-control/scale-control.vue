<template>
  <div :class="[styles.container]">
    <span :class="[styles.label]">
      Scale
    </span>

    <RangeControl :model-value="scale[0]" @update:model-value="whenChangeByX" label="X (by horizontal)" name="scale-x"
      :min="0.1" :max="5" :step="0.1" />

    <RangeControl :model-value="scale[1]" @update:model-value="whenChangeByY" label="Y (by vertical)" name="scale-y"
      :min="0.1" :max="5" :step="0.1" />
  </div>
</template>

<script lang="ts" setup>
import RangeControl from '../../_ui/range-control/range-control.vue';
import { WatermarkElement } from '../../../stores/watermark-elements/types/watermark-element';
import styles from './index.module.css'

const scale = defineModel<WatermarkElement['scale']>({
  required: true
})

const whenChangeByX = (value: number) => {
  return scale.value[0] = value
}

const whenChangeByY = (value: number) => {
  return scale.value[1] = value
}

</script>