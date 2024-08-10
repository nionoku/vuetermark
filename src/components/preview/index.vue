<template>
  <svg xmlns="http://www.w3.org/2000/svg" view-box="0 0 100 100" :class="[styles.container]" ref="svgElement">
    <image v-if="photo" :href="photo" :class="[styles.photo]" />

    <g id="watermark-elements" transform="scale(1, 1)">
      <WatermarkElement v-for="elem in elements" :element="elem" :key="elem.id" />
    </g>
  </svg>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import styles from './index.module.css'
import WatermarkElement from '../watermark-element/index.vue'
import { getImage } from './utils/get-image';
import { useWatermarkElementsStore } from '../../stores/watermark-elements';
import { storeToRefs } from 'pinia';

const { elements } = storeToRefs(useWatermarkElementsStore())

defineProps<{
  photo: string
}>();

const svgElement = ref<SVGElement>()

defineExpose({
  getImage: () => getImage(svgElement.value)
})
</script>