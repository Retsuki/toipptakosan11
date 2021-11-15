<template>
  <router-link
    :to="`/architectures/${id}`"
    :class="$style.card"
    :style="styleComputed"
  >
    <div :class="$style.content">
      <a-img :src="img" height="250" />

      <div :class="$style.detail">
        <a-text :text="name" :class="$style.text" weight="bold" size="l" />
        <m-tag-group :tags="tags" />
      </div>
    </div>
  </router-link>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    id: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    tags: {
      type: Array as PropType<string[]>,
      required: true,
    },
    width: {
      type: String,
      default: '375',
    },
  },
  setup(props) {
    const styleComputed = computed(() => {
      return {
        width: `${props.width}px`,
      }
    })
    return {
      styleComputed,
    }
  },
})
</script>

<style lang="scss" module>
.card {
  border-radius: 4px;
  box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%),
    0 1px 5px 0 rgb(0 0 0 / 12%);
  overflow: hidden;
}

.content {
  &:hover {
    transform: scale(1.05, 1.05);
    transition: 1s all;
  }
}

.detail {
  padding: 16px 16px 32px 16px;
}

.text {
  padding-bottom: 16px;
}
</style>
