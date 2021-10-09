<template>
  <div :class="$style.wrapper">
    <h1>Home</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import OGlobalHeader from '../components/organisms/OGlobalHeader.vue'

export default defineComponent({
  components: { OGlobalHeader },
  setup () {
    return {
    }
  }
})
</script>

<style lang="scss" module>
.wrapper {
  max-width: 1200px;
  margin: 0 auto;
}
</style>