<template>
  <div :class="$style.wrapper">
    <m-auth
      v-model:email="email"
      v-model:password="password"
      buttonText="ログイン"
      :onClick="handleLogin"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useLogin from '../composables/login'

export default defineComponent({
  setup() {
    const { email, password, handleLogin } = useLogin()
    return {
      email,
      password,
      handleLogin,
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
</style>
