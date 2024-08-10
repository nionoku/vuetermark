<template>
  <div :class="[styles.container]">
    <label>
      <span>
        Label
      </span>

      <input name="label" type="text" maxlength="50" :value="label" @input="whenChange">
    </label>
  </div>
</template>

<script lang="ts" setup>
import { WatermarkElement } from '../../../stores/watermark-elements/types/watermark-element';
import styles from './index.module.css'

const label = defineModel<WatermarkElement['label']>({
  required: true
})

const whenChange = (event: Event) => {
  const value = (event.target as HTMLInputElement).value

  return label.value = value
}

</script>