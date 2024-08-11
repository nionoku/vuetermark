<template>
  <div :class="[styles.container]">
    <span :class="[styles.label]">
      Scale
    </span>

    <RangeControl :model-value="scale[0]" @update:model-value="whenChangeByX" label="X (by horizontal)" name="scale-x"
      :min="0.1" :max="5" :step="0.1" />

    <RangeControl :model-value="scale[1]" @update:model-value="whenChangeByY" label="Y (by vertical)" name="scale-y"
      :min="0.1" :max="5" :step="0.1" />

    <label :class="[styles.scaleFixedLabel]">
      <span>
        Fixed scale
      </span>

      <input v-model="fixedScale" type="checkbox" name="scale-fixed">
    </label>
  </div>
</template>

<script lang="ts" setup>
import RangeControl from '../../_ui/range-control/range-control.vue';
import { WatermarkElement } from '../../../stores/watermark-elements/types/watermark-element';
import styles from './index.module.css'
import { ref } from 'vue';

const scale = defineModel<WatermarkElement['scale']>({
  required: true
})

const fixedScale = ref<boolean>()

const whenChangeByX = (value: number) => {
  scale.value[0] = value

  if (fixedScale.value) {
    scale.value[1] = value
  }

  return value
}

const whenChangeByY = (value: number) => {
  scale.value[1] = value

  if (fixedScale.value) {
    scale.value[0] = value
  }

  return value
}

</script>