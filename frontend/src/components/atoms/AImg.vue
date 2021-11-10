<template>
  <img
    :src="src"
    :width="width"
    :height="height"
    :alt="alt"
    :class="[
      {
        [$style.circle]: circle,
      },
    ]"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    src: {
      type: String,
      require: true,
    },
    width: {
      type: String,
      default: '150',
    },
    height: {
      type: String,
      default: '150',
    },
    alt: {
      type: String,
      default: 'image',
    },
    circle: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<style lang="scss" module>
.circle {
  border-radius: $circle;
}
</style>
