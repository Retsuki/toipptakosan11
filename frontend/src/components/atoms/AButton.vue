<template>
  <button
    :class="$style.button"
    :style="styleComputed"
    @click="() => onClick()"
  >
    {{ text }}
  </button>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  props: {
    text: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: '#ffffff',
    },
    backgroundColor: {
      type: String,
      default: '#000',
    },
    padding: {
      type: [String, Number],
      default: 16,
    },
    onClick: {
      type: Function,
      required: true,
    },
  },

  setup(props) {
    const styleComputed = computed(() => {
      return {
        color: `${props.color}`,
        backgroundColor: `${props.backgroundColor}`,
        padding: `${props.padding}px`,
      }
    })

    return { styleComputed }
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
