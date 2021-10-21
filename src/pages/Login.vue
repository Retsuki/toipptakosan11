<template>
  <div :class="$style.wrapper">
    <div :class="$style.contents">
      <input
        type="text"
        :class="$style.email"
        placeholder="Email"
        v-model="email"
      />

      <input
        type="password"
        :class="$style.password"
        placeholder="Password"
        v-model="password"
      />

      <button :class="$style.button">ログイン</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

export default defineComponent({
  setup() {
    const email = ref()
    const password = ref()
    const auth = getAuth()
    const signup = () => {
      createUserWithEmailAndPassword(auth, email, password).then(() => {})
    }
    return {
      email,
      password,
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
