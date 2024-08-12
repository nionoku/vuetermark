<template>
  <div :class="[styles.container]">
    <svg ref="svgRef" xmlns="http://www.w3.org/2000/svg" :view-box="viewBox" :class="[styles.svg]"
      :style="{ 'aspect-ratio': imageAspectRatio }">
      <image v-if="props.photo?.src" :href="props.photo.src" :class="[styles.photo]" />

      <g id="watermark-elements" transform="scale(1, 1)">
        <WatermarkElement v-for="elem in elements" :model-value="elem" :key="elem.id" />
      </g>
    </svg>
  </div>
</template>

<script lang="ts" setup>
import { computed, CSSProperties, ref } from 'vue';
import styles from './index.module.css'
import WatermarkElement from '../watermark-element/watermark-element.vue'
import { getImage } from './utils/get-image';
import { useWatermarkElementsStore } from '../../stores/watermark-elements';
import { storeToRefs } from 'pinia';

const { elements } = storeToRefs(useWatermarkElementsStore())

const props = defineProps<{
  photo: HTMLImageElement | undefined
}>();

const svgRef = ref<SVGElement>()

const viewBox = computed(() => {
  return `0 0 ${props.photo?.width} ${props.photo?.height}`
})

const imageAspectRatio = computed<CSSProperties['aspect-ratio']>(() => {
  if (!props.photo) {
    return undefined
  }

  return props.photo.width / props.photo.height
})

defineExpose({
  getImage: () => getImage(svgRef.value, props.photo?.src)
})
</script>