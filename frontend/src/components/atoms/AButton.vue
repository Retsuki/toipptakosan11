<template>
  <button :class="$style.button" @click="onClick">
    {{ text }}
  </button>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  props: {
    text: String,
    onClick: Function,
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
