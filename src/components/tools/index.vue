<template>
  <div :class="[styles.container]">
    <PickFileTool v-if="state === EditorState.WAIT_FILE" />
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { useEditorStore } from '../../stores/editor';
import { EditorState } from '../../stores/editor/state-enum';
import PickFileTool from '../pick-file-tool/index.vue'
import styles from './index.module.css'

const { state } = storeToRefs(useEditorStore())

</script>