<template>
  <div :class="[styles.container]">
    <PickFileTool v-if="state === EditorState.WAIT_FILE" />
    <WatermarkElementsListTool v-else-if="state === EditorState.EDITING" />
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { useEditorStore } from '../../stores/editor';
import { EditorState } from '../../stores/editor/constants/state-enum';
import PickFileTool from '../pick-file-tool/pick-file-tool.vue'
import WatermarkElementsListTool from '../watermark-elements-list-tool/watermark-elements-list-tool.vue'
import styles from './index.module.css'

const { state } = storeToRefs(useEditorStore())

</script>