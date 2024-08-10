<template>
  <div :class="[styles.container]">
    <Preview :photo="photo" :class="[styles.preview]" />

    <Tools :class="[styles.tools]" />
  </div>
</template>

<script lang="ts" setup>
import Preview from '../preview/index.vue'
import Tools from '../tools/index.vue'
import styles from './index.module.css'

const props = defineProps<{
  photo: string
}>();

const emits = defineEmits({
});

</script>