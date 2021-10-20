<template>
  <div :class="$style.wrapper">
    <input type="text" :class="$style.email">

    <input type="password" :class="$style.password">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    

    return {}
  }
})
</script>

<style lang="scss" module>
.wrapper {
  width: 100%;
  height: 100%;
}
</style>