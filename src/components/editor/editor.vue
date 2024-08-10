<template>
  <div :class="[styles.container]">
    <Preview :photo="photoLink" :class="[styles.preview]" />

    <Tools :class="[styles.tools]" />
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import Preview from '../preview/preview.vue'
import Tools from '../tools/tools.vue'
import styles from './index.module.css'
import { useEditorStore } from '../../stores/editor';

const { photoLink } = storeToRefs(useEditorStore())

</script>