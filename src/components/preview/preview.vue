<template>
  <svg xmlns="http://www.w3.org/2000/svg" view-box="0 0 100 100" :class="[styles.container]" ref="svgElement">
    <image v-if="photo" :href="photo" :class="[styles.photo]" />

    <g id="watermark-elements" transform="scale(1, 1)">
      <WatermarkElement v-for="elem in elements" :model-value="elem" :key="elem.id" />
    </g>
  </svg>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import styles from './index.module.css'
import WatermarkElement from '../watermark-element/watermark-element.vue'
import { getImage } from './utils/get-image';
import { useWatermarkElementsStore } from '../../stores/watermark-elements';
import { storeToRefs } from 'pinia';

const { elements } = storeToRefs(useWatermarkElementsStore())

const props = defineProps<{
  photo: string | undefined
}>();

const svgElement = ref<SVGElement>()

defineExpose({
  getImage: () => getImage(props.photo, svgElement.value)
})
</script>