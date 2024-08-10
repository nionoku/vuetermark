<template>
  <Editor :photo="photoLink" />
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import Editor from './components/editor/index.vue'
import { useEditorStore } from './stores/editor/index';

const { photoLink } = storeToRefs(useEditorStore())

</script>