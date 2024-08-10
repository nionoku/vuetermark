<template>
  <div :class="[styles.container]">
    <div :class="[styles.controls]">
      <LabelControl v-model="props.selectedElement.label" />
      <PositionControl v-model="props.selectedElement.position" />
      <RotationControl v-model="props.selectedElement.rotation" />
      <ScaleControl v-model="props.selectedElement.scale" />

    </div>

    <button @click="whenCloseElementEditor">
      Close element editor
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

const props = defineProps<{
  selectedElement: WatermarkElement
}>();

const { setSelectedElement } = useWatermarkElementsStore()

const whenCloseElementEditor = () => {
  setSelectedElement(null)
}

</script>