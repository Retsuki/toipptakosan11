<template>
  <header :class="$style.wrapper">
      <router-link to="/" :class="$style.logo">Rちゃんワールド</router-link>
      <div>
        <ul>
          <li><router-link to="/member">member</router-link></li>
        </ul>
      </div>
    </header>
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
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  font-size: 1rem;
}

.logo {
  font-size: 1.25rem;
}
</style>