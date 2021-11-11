<template>
  <div :class="$style.cards">
    <m-route-card
      v-for="{ link, src, text } of cards"
      :key="link"
      :link="link"
      :src="src"
      :text="text"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

interface RouteCard {
  link: string
  src: string
  text: string
}

export default defineComponent({
  props: {
    cards: {
      type: Array as PropType<RouteCard[]>,
      required: true,
    },
  },
})
</script>

<style lang="scss" module>
.cards {
  display: grid;
  grid-template-columns: 300px 300px;
  column-gap: 64px;
}
.card {
  width: 300px;
  height: 200px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: $border;
  border-radius: $radius;
}
</style>
