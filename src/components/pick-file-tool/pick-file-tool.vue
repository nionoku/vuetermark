<template>
  <div :class="[styles.container]">
    <button @click="whenClick" :class="[styles.button]">
      Select file
    </button>
  </div>
</template>

<script lang="ts" setup>
import styles from './index.module.css'
import { usePickFile } from './composables/use-pick-file';
import { useFileDialog } from '@vueuse/core';

const { open, onChange } = useFileDialog({
  accept: 'image/*',
  reset: true
})

const whenClick = () => open()

onChange(usePickFile)

</script>