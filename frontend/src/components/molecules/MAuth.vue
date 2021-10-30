<template>
  <div :class="$style.wrapper">
    <a-input
      type="text"
      placeholder="Email"
      :class="$style.content"
      :value="email"
      @input="$emit('update:email', $event.target.value)"
    />

    <a-input
      type="password"
      placeholder="Password"
      :class="$style.content"
      :value="password"
      @input="$emit('update:password', $event.target.value)"
    />

    <a-button
      :text="buttonText"
      :onClick="onClick"
      :class="$style.button"
    ></a-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    email: String,
    password: String,
    buttonText: String,
    onClick: Function,
  },
})
</script>

<style lang="scss" module>
.wrapper {
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
