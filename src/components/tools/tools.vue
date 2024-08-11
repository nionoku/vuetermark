<template>
  <div :class="[styles.container]">
    <PickFileTool v-if="state === EditorState.WAIT_FILE" />

    <WatermarkElementTool v-else-if="state === EditorState.EDITING && selectedElement"
      :selected-element="selectedElement" />

    <WatermarkElementsListTool v-else-if="state === EditorState.EDITING" />
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { useEditorStore } from '../../stores/editor';
import { EditorState } from '../../stores/editor/constants/state-enum';
import PickFileTool from '../pick-file-tool/pick-file-tool.vue'
import WatermarkElementsListTool from '../watermark-elements-list-tool/watermark-elements-list-tool.vue'
import WatermarkElementTool from '../watermark-element-tool/watermark-element-tool.vue'
import styles from './index.module.css'
import { useWatermarkElementsStore } from '../../stores/watermark-elements';

const { state } = storeToRefs(useEditorStore())
const { selectedElement } = storeToRefs(useWatermarkElementsStore())

</script>