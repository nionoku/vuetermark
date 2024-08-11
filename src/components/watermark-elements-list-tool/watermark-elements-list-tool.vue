<template>
  <div>
    <button @click="whenClick">
      Add watermark element
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

const { createBlankElement, setSelectedElement } = useWatermarkElementsStore()
const { elements } = storeToRefs(useWatermarkElementsStore())

const whenClick = () => {
  const element = createBlankElement()

  setSelectedElement(element)
}

const whenItemClick = (element: WatermarkElement) => {
  setSelectedElement(element)
}

</script>