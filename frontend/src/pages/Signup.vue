<template>
  <div :class="$style.wrapper">
    <div :class="$style.contents">
      <a-input
        type="text"
        placeholder="Email"
        v-model="email"
        :class="$style.content"
      />

      <a-input
        type="password"
        placeholder="Password"
        v-model="password"
        :class="$style.content"
      />

      <a-button
        text="サインアップ"
        :onClick="handleSignup"
        :class="$style.button"
      ></a-button>
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
  width: 250px;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
}

.content {
  height: 28px;
  margin-bottom: 15px;
}

.button {
  padding: 16px;
  color: $color-white;
  background-color: $color-black;
}
</style>
