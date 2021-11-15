<template>
  <div :class="$style.tagGroup">
    <a-tag
      v-for="tag of tags"
      :key="tag"
      :text="tag"
      :size="tagSize"
      :class="$style.tag"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    tags: {
      type: Array as PropType<string[]>,
      required: true,
    },
    tagSize: {
      type: String,
      default: 'l',
    },
  },
})
</script>

<style lang="scss" module>
.tagGroup {
  display: flex;
  flex-wrap: wrap;
}

.tag {
  margin: 0 8px 0 0;
}
</style>
