<template>
  <div
    :class="[
      $style.wrapper,
      { [$style.flexRow]: flexRow },
      { [$style.flexColumn]: flexColumn },
    ]"
  >
    <label for="labelInput" :class="$style.label" :style="styleComputed">
      {{ labelText }}
    </label>
    <a-input
      name="labelInput"
      :placeholder="placeholder"
      :class="$style.input"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.currentTarget)"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  props: {
    labelText: {
      type: String,
      default: '',
      required: true,
    },
    type: {
      type: String,
      default: 'text',
      required: true,
    },
    placeholder: {
      type: String,
      default: '',
    },
    modelValue: {
      type: String,
      required: true,
    },
    flexRow: {
      type: Boolean,
      default: false,
    },
    flexColumn: {
      type: Boolean,
      default: false,
    },
    margin: {
      type: Number,
      default: 4,
    },
  },
  emits: ['update:modelValue'],
  setup(props) {
    const styleComputed = computed(() => {
      return {
        marginBottom: `${props.margin}px`,
        marginRight: `${props.margin}px`,
      }
    })
    return { styleComputed }
  },
})
</script>

<style lang="scss" module>
.wrapper {
  display: flex;
}

.flexRow {
  flex-direction: row;
}

.flexColumn {
  flex-direction: column;
}
</style>
