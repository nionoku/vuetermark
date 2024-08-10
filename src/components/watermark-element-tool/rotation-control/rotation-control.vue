<template>
  <div :class="[styles.container]">
    <label>
      <span>
        Rotation
      </span>

      <input name="rotation" type="range" min="-180" max="180" step="1" :value="rotation[0]"
        @input="whenChangeRotation">
    </label>
  </div>
</template>

<script lang="ts" setup>
import { WatermarkElement } from '../../../stores/watermark-elements/types/watermark-element';
import styles from './index.module.css'

const rotation = defineModel<WatermarkElement['rotation']>({
  required: true
})

const whenChangeRotation = (event: Event) => {
  const value = parseInt((event.target as HTMLInputElement).value)

  return rotation.value[0] = value
}

</script>