<template>
  <select
    :name="name"
    :class="$style.select"
    :value="modelValue"
    @change="$emit('update:modelValue', $event.currentTarget)"
  >
    <option value="">--選択してください--</option>
    <slot />
  </select>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    name: {
      type: String,
      default: '',
      required: false,
    },
    modelValue: {
      type: [String, Number],
      default: '',
      required: false,
    },
  },
  emits: ['update:modelValue'],
  setup() {
    return {}
  },
})
</script>

<style lang="scss" module>
.select {
  border: $border;
  border-radius: $radius;
  padding: 10px;
}
</style>
