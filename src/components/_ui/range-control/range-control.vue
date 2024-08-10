<template>
  <label :class="[styles.container]">
    <span :class="[styles.label]">
      {{ label }}
    </span>

    <input :value="model" @input="whenChange" :name="name" type="range" :min="min" :max="max" :step="step"
      :class="[styles.control]">
  </label>
</template>

<script lang="ts" setup>
import styles from './index.module.css'

const model = defineModel<number>({
  required: true
})

defineProps<{
  label: string

  name: string
  min: number
  max: number
  step: number
}>()

const whenChange = (event: Event) => {
  const value = Number((event.target as HTMLInputElement).value)
  return model.value = value
}

</script>