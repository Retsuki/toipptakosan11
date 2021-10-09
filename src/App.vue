<template>
  <div id="app">
    <o-global-header />
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import OGlobalHeader from './components/organisms/OGlobalHeader.vue'

export default defineComponent({
  name: 'App',
  components: {
    OGlobalHeader
  }
})
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}
</style>
