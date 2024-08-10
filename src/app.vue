<template>
  <Editor :photo="ExamplePhoto" />
</template>

<script lang="ts" setup>
import Editor from './components/editor/index.vue'
import ExamplePhoto from './assets/example.jpg'

const props = defineProps<{
}>();

const emits = defineEmits({
});

</script>