<template>
  <span :class="[$style.tag, $style[size]]" :style="styleComputed">
    {{ text }}
  </span>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  props: {
    text: {
      type: String,
      required: true,
    },
    textColor: {
      type: String,
      default: '#000',
    },
    color: {
      type: String,
      default: '#e0e0e0',
    },
    size: {
      type: String,
      default: 'm',
    },
  },
  setup(props) {
    const styleComputed = computed(() => {
      return {
        color: props.textColor,
        backgroundColor: props.color,
      }
    })
    return { styleComputed }
  },
})
</script>

<style lang="scss" module>
.tag {
  border-radius: 25px;
  padding-left: 16px;
  padding-right: 16px;
  align-items: center;
  display: inline-flex;
  font-size: $font-size-m;
  height: 32px;
}
</style>
