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
import { setTitle } from '../../utils/set-title';

const { open, onChange } = useFileDialog({
  accept: 'image/*',
  reset: true
})

const whenClick = () => open()

onChange(async (files) => {
  const file = await usePickFile(files)

  if (file.name) {
    setTitle(file.name)
  }
})

</script>