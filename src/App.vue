<template>
  <o-global-header />
  <router-view :class="$style.mainContents"></router-view>
  <o-global-footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import OGlobalFooter from './components/organisms/OGlobalFooter.vue'
import OGlobalHeader from './components/organisms/OGlobalHeader.vue'

export default defineComponent({
  name: 'App',
  components: {
    OGlobalHeader,
    OGlobalFooter,
  },
})
</script>

<style lang="scss" module>
#app {
  width: 100%;
  height: 100%;
}

.mainContents {
  min-height: 100vh;
  max-height: 100%;
}
</style>
