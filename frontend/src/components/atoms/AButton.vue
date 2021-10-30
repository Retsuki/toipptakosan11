<template>
  <button :class="$style.button" @click="() => onClick">
    {{ text }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    text: {
      type: String,
      required: true,
    },
    onClick: {
      type: Function,
      required: true,
    },
  },
})
</script>

<style lang="scss" module>
.button {
  cursor: pointer;
  border: none;
  border-radius: $radius;
}
</style>
