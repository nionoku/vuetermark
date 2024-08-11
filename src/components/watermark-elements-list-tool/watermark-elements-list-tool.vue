<template>
  <div :class="[styles.container]">
    <button @click="whenClickCreateBlankElement">
      Add watermark element
    </button>

    <button @click="whenClickExportImageToPNG">
      Export to PNG
    </button>

    <WatermarkElementsList :elements="elements" @item-click="whenItemClick" />
  </div>
</template>

<script lang="ts" setup>
import styles from './index.module.css'
import { storeToRefs } from 'pinia';
import { useWatermarkElementsStore } from '../../stores/watermark-elements';
import WatermarkElementsList from '../watermark-elements-list/watermark-elements-list.vue'
import { WatermarkElement } from '../../stores/watermark-elements/types/watermark-element';
import { useCallExportToPNG } from '../../composables/use-call-export';

const { createBlankElement, setSelectedElement } = useWatermarkElementsStore()
const { elements } = storeToRefs(useWatermarkElementsStore())
const { emit: exportToPNG } = useCallExportToPNG

const whenClickCreateBlankElement = () => {
  const element = createBlankElement()
  setSelectedElement(element)
}

const whenItemClick = (element: WatermarkElement) => {
  setSelectedElement(element)
}

const whenClickExportImageToPNG = () => {
  exportToPNG()
}

</script>