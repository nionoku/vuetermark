<template>
  <RangeControl :model-value="opacity" @update:model-value="whenChangeRotation" label="Opacity" name="opacity" :min="0"
    :max="1" :step="0.02" />
</template>

<script lang="ts" setup>
import RangeControl from '../../_ui/range-control/range-control.vue';
import { WatermarkElement } from '../../../stores/watermark-elements/types/watermark-element';
import styles from './index.module.css'

const opacity = defineModel<WatermarkElement['opacity']>({
  required: true
})

const whenChangeRotation = (value: number) => {
  return opacity.value = value
}

</script>