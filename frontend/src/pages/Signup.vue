<template>
  <div :class="$style.wrapper">
    <div :class="$style.contents">
      <input type="text" placeholder="Email" v-model="email" />

      <input type="password" placeholder="Password" v-model="password" />

      <button @click="handleSignup">登録</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useSignup from '../composables/signup'

export default defineComponent({
  setup() {
    const { email, password, handleSignup } = useSignup()
    return {
      email,
      password,
      handleSignup,
    }
  },
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
