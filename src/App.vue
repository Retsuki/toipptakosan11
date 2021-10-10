<template>
  <o-global-header />
  <router-view></router-view>
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
  max-width: 1260px;
  padding-left: 40px;
  padding-right: 40px;
  margin: auto;
}
</style>
