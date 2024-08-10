<template>
  <div :class="[styles.container]">
    <button @click="open" :class="[styles.button]">
      Select file
    </button>

    <input ref="fileInputRef" type="file" @change="usePickFile" :class="[styles.fileInput]" />
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

onChange(usePickFile)

</script>