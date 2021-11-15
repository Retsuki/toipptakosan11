<template>
  <div :class="$style.contents">
    <o-architectures
      v-for="{ img, name, tags } of architectures"
      :key="img"
      :img="img"
      :name="name"
      :tags="tags"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

interface Card {
  img: string
  name: string
  tags: string[]
}

export default defineComponent({
  props: {
    architectures: {
      type: Array as PropType<Card[]>,
      required: true,
    },
  },
})
</script>

<style lang="scss" module>
.contents {
  width: 100%;
  height: 100%;
  display: grid;
  justify-content: center;
  padding-top: 60px;
  padding-bottom: 120px;
  row-gap: 30px;

  @media (min-width: 760px) {
    grid-template-columns: 375px 375px;
    column-gap: 15px;
  }

  @media (min-width: 1125px) {
    grid-template-columns: 375px 375px 375px;
    column-gap: 15px;
  }
}
</style>
