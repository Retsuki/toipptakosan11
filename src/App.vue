<template>
  <o-global-header />
  <router-view></router-view>
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
    OGlobalFooter
  }
})
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}
</style>
