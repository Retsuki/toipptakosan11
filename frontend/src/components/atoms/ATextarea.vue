<template>
  <textarea
    :name="name"
    :cols="cols"
    :rows="rows"
    :placeholder="placeholder"
    :class="$style.textarea"
  ></textarea>
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
    rows: {
      type: Number,
      default: 10,
    },
    cols: {
      type: Number,
      default: 30,
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
  setup() {
    return {}
  },
})
</script>

<style lang="scss" module>
.textarea {
  border: $border;
  border-radius: $radius;
  padding: 10px;
}
</style>
