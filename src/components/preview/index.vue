<template>
  <svg xmlns="http://www.w3.org/2000/svg" view-box="0 0 100 100" :class="[styles.container]" ref="svgElement">
    <image v-if="photo" :href="photo" :class="[styles.photo]" />

    <g id="watermark-elements" transform="scale(1, 1)">

    </g>
  </svg>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import styles from './index.module.css'
import { getImage } from './utils/get-image';

const props = defineProps<{
  photo: string
}>();

const svgElement = ref<SVGElement>()

defineExpose({
  getImage: () => getImage(svgElement.value)
})
</script>