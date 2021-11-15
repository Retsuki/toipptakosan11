<template>
  <img
    :src="src"
    :width="width"
    :height="height"
    :alt="alt"
    :class="[
      {
        [$style.width]: !width,
        [$style.height]: !height,
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
      require: false,
    },
    height: {
      type: String,
      require: false,
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
.width {
  width: 100%;
}
.height {
  height: 100%;
}
.circle {
  border-radius: $circle;
}
</style>
