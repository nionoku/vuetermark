<template>
  <div :class="[styles.container]">
    <Preview ref="previewRef" :photo="photo" :class="[styles.preview]" />

    <Tools :class="[styles.tools]" />
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import Preview from '../preview/preview.vue'
import Tools from '../tools/tools.vue'
import styles from './index.module.css'
import { useEditorStore } from '../../stores/editor';
import { useCallExportToPNG } from '../../composables/use-call-export';
import { onUnmounted, ref } from 'vue';
import { download } from '../../utils/download';

const { photo, file } = storeToRefs(useEditorStore())
const previewRef = ref<InstanceType<typeof Preview>>()
const { on: whenCallExportToPNG } = useCallExportToPNG

const unsubscribeCallExportToPNG = whenCallExportToPNG(async () => {
  if (previewRef.value) {
    const imageUri = await previewRef.value.getImage()

    const filename = (() => {
      const filename = file.value?.name?.split('.')?.[0]

      if (!filename) {
        return 'with-watermark.png'
      }

      return `${filename}-with-watermark.png`
    })()

    download(imageUri, filename)
  }
})

onUnmounted(() => {
  unsubscribeCallExportToPNG()
})

</script>