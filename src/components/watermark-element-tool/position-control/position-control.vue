<template>
  <div :class="[styles.container]">
    <span>
      Position
    </span>

    <div :class="[styles.controlsContainer]">
      <label>
        <span>
          X (by horizontal)
        </span>

        <input name="position-x" type="range" min="0" max="100" step="1" :value="position[0]" @input="whenChangeByX">
      </label>

      <label>
        <span>
          Y (by vertical)
        </span>

        <input name="position-y" type="range" min="0" max="100" step="1" :value="position[1]" @input="whenChangeByY">
      </label>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { WatermarkElement } from '../../../stores/watermark-elements/types/watermark-element';
import styles from './index.module.css'

const position = defineModel<WatermarkElement['position']>({
  required: true
})

const whenChangeByX = (event: Event) => {
  const value = parseInt((event.target as HTMLInputElement).value)

  return position.value[0] = value
}

const whenChangeByY = (event: Event) => {
  const value = parseInt((event.target as HTMLInputElement).value)

  return position.value[1] = value
}

</script>