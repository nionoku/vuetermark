<template>
  <g :data-watermark="element.id" :style="{ transform }">
    <text text-anchor="middle">{{ element.label }}</text>
  </g>
</template>

<script lang="ts" setup>
import { toRef } from 'vue';
import { WatermarkElement } from '../../stores/watermark-elements/types/watermark-element';
import { useTransform } from './composable/use-transform';

const props = defineProps<{
  element: WatermarkElement
}>();

const { transform } = useTransform(toRef(props.element))
</script>