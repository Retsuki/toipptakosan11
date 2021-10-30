<template>
  <div :class="$style.wrapper">
    <m-auth
      v-model:email="email"
      v-model:password="password"
      buttonText="サインアップ"
      :onClick="handleSignup"
    />
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
</style>
