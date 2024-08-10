<template>
  <div>
    <WatermarkElementsList :elements="elements" />

    <button @click="whenClick">
      Add watermark element
    </button>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { useWatermarkElementsStore } from '../../stores/watermark-elements';
import WatermarkElementsList from '../watermark-elements-list/watermark-elements-list.vue'
import styles from './index.module.css'

const { appendElement } = useWatermarkElementsStore()
const { elements } = storeToRefs(useWatermarkElementsStore())

const whenClick = () => {
  appendElement({
    label: 'Hello world',

    position: ['50%', '50%'],
    rotation: '0deg',
    scale: [1, 1]
  })
}

</script>