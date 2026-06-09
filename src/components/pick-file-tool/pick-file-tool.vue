<template>
  <div :class="[styles.container]">
    <input ref="fileInputRef" type="file" accept="image/*" :class="[styles.fileInput]" @change="whenChange">

    <button type="button" @click="whenClick" :class="[styles.button]">
      Select file
    </button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import styles from './index.module.css'
import { usePickFile } from './composables/use-pick-file';
import { setTitle } from '../../utils/set-title';

const fileInputRef = ref<HTMLInputElement>()

const whenClick = () => {
  fileInputRef.value?.click()
}

const whenChange = async (event: Event) => {
  const input = event.target as HTMLInputElement
  const files = input.files

  if (!files?.length) {
    return
  }

  const file = await usePickFile(files)

  if (file.name) {
    setTitle(file.name)
  }

  input.value = ''
}

</script>
