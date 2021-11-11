<template>
  <router-link :to="link" :class="$style.card">
    <a-img :src="src" />
    <a-text :text="text" weight="bold" />
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    link: {
      type: String,
      required: true,
    },
    src: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
})
</script>

<style lang="scss" module>
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
