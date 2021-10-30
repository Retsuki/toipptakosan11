<template>
  <button :class="$style.button" @click="onClick">{{ text }}</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    text: String,
    onClick: Function,
  },
  setup() {
    return {}
  },
})
</script>

<style lang="scss" module>
.button {
  width: 100%;
  height: 100%;
  cursor: pointer;
}
</style>
