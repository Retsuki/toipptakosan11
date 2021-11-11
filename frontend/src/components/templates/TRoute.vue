<template>
  <div :class="$style.wrapper">
    <o-route-cards :cards="cards" />
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
.wrapper {
  display: flex;
  justify-content: center;
  margin-top: 200px;
}
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
