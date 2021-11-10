<template>
  <p :class="[$style[color], $style[size], $style[weight]]">{{ text }}</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    text: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: 'default',
    },
    size: {
      type: String,
      default: 'm',
    },
    weight: {
      type: String,
      default: 'weightDefault',
    },
  },
  setup() {
    return {}
  },
})
</script>

<style lang="scss" module>
.default {
  color: $color-black;
}

.info {
  color: none;
}

.warning {
  color: $color-warning;
}

.s {
  font-size: $font-size-s;
}

.m {
  font-size: $font-size-m;
}

.l {
  font-size: $font-size-l;
}

.weightDefault {
  font-weight: $font-weight-default;
}
.bold {
  font-weight: $font-weight-bold;
}
</style>
