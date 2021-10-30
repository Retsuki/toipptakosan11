<template>
  <main :class="$style.wrapper">
    <div :class="$style.hello">
      <div :class="$style.container">
        <h1>R - World</h1>
        <p>Let them draw big dreams. Make big dreams come true.</p>
      </div>
    </div>

    <section :class="$style.section">
      <h2>Mission</h2>
      <p>挑戦者に自由で大きな夢を描かせ、それを実現させる</p>
      <h3>Organization</h3>
      <p>Rちゃんが出会ってきた愉快な曲者たちの集まり</p>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  },
})
</script>

<style lang="scss" module>
.wrapper {
  margin: 0 auto;
  margin-bottom: 200px;
}

.hello {
  width: 100%;
  max-width: 1084px;
  margin: 0 auto;
  padding-right: 20px;
  padding-left: 20px;
}

.container {
  min-height: 440px;

  & > h1 {
    font-size: 4rem;
    font-weight: 700;
    padding-top: 100px;
  }

  & > p {
    font-size: 1.5rem;
    font-weight: 700;
  }
}

.section {
  max-width: 800px;
  margin: 0 auto;

  & > h2 {
    font-size: 2rem;
    padding-top: 60px;
    margin-bottom: 60px;
  }

  & > h3 {
    font-size: 1.6rem;
    padding-top: 60px;
    margin-bottom: 60px;
  }
}
</style>
