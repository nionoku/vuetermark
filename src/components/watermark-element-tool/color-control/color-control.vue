<template>
  <label :class="[styles.container]">
    <span>
      Color function
    </span>

    <input name="label" type="text" maxlength="200" v-model="colorText" @input="whenChange">
  </label>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { WatermarkElement } from '../../../stores/watermark-elements/types/watermark-element';
import styles from './index.module.css'
import { parseColor } from './utils/parse-color';

const color = defineModel<WatermarkElement['color']>({
  required: true,
})

const colorText = ref('')

const whenChange = (event: Event) => {
  const value = (event.target as HTMLInputElement).value

  return color.value = parseColor(value)
}

</script>