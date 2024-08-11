<template>
  <label :class="[styles.container]">
    <span>
      Shadow function
    </span>

    <input name="shadow" type="text" maxlength="50" :value="shadow" @input="whenChange">
  </label>
</template>

<script lang="ts" setup>
import { WatermarkElement } from '../../../stores/watermark-elements/types/watermark-element';
import styles from './index.module.css'

const shadow = defineModel<WatermarkElement['shadow']>({
  required: true
})

const whenChange = (event: Event) => {
  const value = (event.target as HTMLInputElement).value

  return shadow.value = value
}

</script>