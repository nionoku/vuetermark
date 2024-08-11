<template>
  <label :class="[styles.container]">
    <span>
      Filter function
    </span>

    <input name="filter" type="text" maxlength="50" :value="filter" @input="whenChange">
  </label>
</template>

<script lang="ts" setup>
import { WatermarkElement } from '../../../stores/watermark-elements/types/watermark-element';
import styles from './index.module.css'

const filter = defineModel<WatermarkElement['filter']>({
  required: true
})

const whenChange = (event: Event) => {
  const value = (event.target as HTMLInputElement).value

  return filter.value = value
}

</script>