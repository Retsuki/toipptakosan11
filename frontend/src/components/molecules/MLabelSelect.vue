<template>
  <div
    :class="[
      $style.wrapper,
      { [$style.flexRow]: flexRow },
      { [$style.flexColumn]: flexColumn },
    ]"
  >
    <label for="labelSelect">{{ labelText }}</label>
    <a-select
      name="labelSelect"
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.value)"
    >
      <option v-for="item of items" :key="item" :value="item">
        {{ item }}
      </option>
    </a-select>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    labelText: {
      type: String,
      default: '',
      required: true,
    },
    items: {
      type: Array as PropType<Array<string | number>>,
      required: true,
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
