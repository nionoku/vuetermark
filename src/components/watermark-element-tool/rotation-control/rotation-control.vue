<template>
  <RangeControl :model-value="rotation[0]" @update:model-value="whenChangeRotation" label="Rotation" name="rotation"
    :min="-180" :max="180" :step="1" />
</template>

<script lang="ts" setup>
import RangeControl from '../../_ui/range-control/range-control.vue';
import { WatermarkElement } from '../../../stores/watermark-elements/types/watermark-element';
import styles from './index.module.css'

const rotation = defineModel<WatermarkElement['rotation']>({
  required: true
})

const whenChangeRotation = (value: number) => {
  return rotation.value[0] = Math.round(value)
}

</script>