<template>
  <RangeControl :model-value="letterSpacing" @update:model-value="whenChange" label="Letter spacing"
    name="letter-spacing" :min="-2" :max="10" :step="0.01" />
</template>

<script lang="ts" setup>
import RangeControl from '../../_ui/range-control/range-control.vue';
import { WatermarkElement } from '../../../stores/watermark-elements/types/watermark-element';
// import styles from './index.module.css'

const letterSpacing = defineModel<WatermarkElement['letterSpacing']>({
  required: true
})

const whenChange = (value: number) => {
  return letterSpacing.value = value
}

</script>