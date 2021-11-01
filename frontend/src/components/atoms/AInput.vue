<template>
  <input
    :type="type"
    :placeholder="placeholder"
    :class="$style.input"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.currentTarget)"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    type: {
      type: String,
      default: 'text',
    },
    name: {
      type: String,
      default: '',
      required: false,
    },
    placeholder: {
      type: String,
      default: '',
    },
    modelValue: {
      type: String,
      required: true,
    },
  },
  emits: ['update:modelValue'],
})
</script>

<style lang="scss" module>
.input {
  border: $border;
  border-radius: $radius;
  padding: 10px;
}
</style>
