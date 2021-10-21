<template>
  <footer :class="$style.wrapper">
    <div>R - World</div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  },
})
</script>

<style lang="scss" module>
.wrapper {
  width: 100vw;
  height: 100px;
  background: #333;
  padding: 75px 0 60px;
  display: flex;
  align-items: center;
  justify-content: center;

  & > div {
    font-size: 1.6rem;
    font-weight: 700;
    color: #fff;
    border-bottom: 1px solid #fff;
  }
}
</style>
