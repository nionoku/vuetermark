<template>
  <div :class="[styles.container]">
    <span>
      Scale
    </span>

    <div :class="[styles.controlsContainer]">
      <label>
        <span>
          X (by horizontal)
        </span>

        <input name="scale-x" type="range" min="0.1" max="5" step="0.1" :value="scale[0]" @input="whenChangeByX">
      </label>

      <label>
        <span>
          Y (by vertical)
        </span>

        <input name="scale-y" type="range" min="0.1" max="5" step="0.1" :value="scale[1]" @input="whenChangeByY">
      </label>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { WatermarkElement } from '../../../stores/watermark-elements/types/watermark-element';
import styles from './index.module.css'

const scale = defineModel<WatermarkElement['scale']>({
  required: true
})

const whenChangeByX = (event: Event) => {
  const value = parseFloat((event.target as HTMLInputElement).value)

  return scale.value[0] = value
}

const whenChangeByY = (event: Event) => {
  const value = parseFloat((event.target as HTMLInputElement).value)

  return scale.value[1] = value
}

</script>