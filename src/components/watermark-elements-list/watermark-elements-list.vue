<template>
  <ul>
    <li v-for="elem in elements" :key="elem.id">
      <span>
        {{ elem.id }}
      </span>

      <span v-if="elem.label">
        ({{ elem.label }})
      </span>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { WatermarkElement } from '../../stores/watermark-elements/types/watermark-element';
import styles from './index.module.css'

defineProps<{
  elements: WatermarkElement[]
}>();

</script>