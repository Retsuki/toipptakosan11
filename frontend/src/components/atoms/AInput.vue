<template>
  <input
    :type="type"
    :placeholder="placeholder"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    :class="$style.input"
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
    placeholder: {
      type: String,
      default: '',
    },
    modelValue: [String, Number],
  },
})
</script>

<style lang="scss" module>
.input {
  border: $border;
  border-radius: $radius;
  padding: 10px;
}
</style>
