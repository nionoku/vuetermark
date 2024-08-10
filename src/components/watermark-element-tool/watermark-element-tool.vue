<template>
  <div :class="[styles.container]">
    <div :class="[styles.controls]">
      <LabelControl v-model="props.selectedElement.label" />
      <PositionControl v-model="props.selectedElement.position" />
      <RotationControl v-model="props.selectedElement.rotation" />
      <ScaleControl v-model="props.selectedElement.scale" />
      <ColorControl v-model="props.selectedElement.color" />
      <OpacityControl v-model="props.selectedElement.opacity" />
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
import ColorControl from './color-control/color-control.vue';
import OpacityControl from './opacity-control/opacity-control.vue';

const props = defineProps<{
  selectedElement: WatermarkElement
}>();

const { setSelectedElement } = useWatermarkElementsStore()

const whenCloseElementEditor = () => {
  setSelectedElement(null)
}

</script>