<template>
  <div :class="[styles.container]">
    <div :class="[styles.controls]">
      <LabelControl v-model="props.selectedElement.label" />
      <LetterSpacingControl v-model="props.selectedElement.letterSpacing" />
      <PositionControl v-model="props.selectedElement.position" />
      <RotationControl v-model="props.selectedElement.rotation" />
      <ScaleControl v-model="props.selectedElement.scale" />
      <ColorControl v-model="props.selectedElement.color" />
      <OpacityControl v-model="props.selectedElement.opacity" />
      <ShadowControl v-model="props.selectedElement.shadow" />
      <FilterControl v-model="props.selectedElement.filter" />
    </div>

    <button @click="whenCloseElementEditor">
      Save and close element editor
    </button>

    <button @click="whenRemoveElement">
      Remove element
    </button>
  </div>
</template>

<script lang="ts" setup>
import styles from './index.module.css'
import { WatermarkElement } from '../../stores/watermark-elements/types/watermark-element';
import PositionControl from './position-control/position-control.vue';
import LabelControl from './label-control/label-control.vue';
import RotationControl from './rotation-control/rotation-control.vue';
import ScaleControl from './scale-control/scale-control.vue';
import { useWatermarkElementsStore } from '../../stores/watermark-elements';
import ColorControl from './color-control/color-control.vue';
import OpacityControl from './opacity-control/opacity-control.vue';
import LetterSpacingControl from './letter-spacing-control/letter-spacing-control.vue';
import ShadowControl from './shadow-control/shadow-control.vue';
import FilterControl from './filter-control/filter-control.vue';

const props = defineProps<{
  selectedElement: WatermarkElement
}>();

const { setSelectedElement, removeSelectedElement } = useWatermarkElementsStore()

const whenCloseElementEditor = () => {
  setSelectedElement(undefined)
}

const whenRemoveElement = () => {
  removeSelectedElement()
}

</script>