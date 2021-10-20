<template>
  <div :class="$style.wrapper">
    <div :class="$style.contents">
      <input type="text" :class="$style.email" placeholder="Email">

      <input type="password" :class="$style.password" placeholder="Password">

      <button :class="$style.button">ログイン</button>
    </div>
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
  display: flex;
  justify-content: center;
}

.contents {
  padding: 30px 0;
  display: grid;
  grid-template-rows: repeat(3, 30px); 
  row-gap: 15px;
}
</style>