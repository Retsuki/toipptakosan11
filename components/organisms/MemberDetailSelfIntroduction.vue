<template>
  <section :class="$style.wrapper">
    <div>Self Introduction</div>
    <p>{{ member.self_introduction }}</p>
    <ul :class="$style.sns">
      <li v-if="member.sns.facebook">
        <a :href="member.sns.facebook">
          <img src="@/assets/images/facebook-brands.svg" alt="facebook icon" :class="$style.icon">
        </a>
      </li>
      <li v-if="member.sns.twitter">
        <a :href="member.sns.twitter">
          <img src="@/assets/images/twitter-brands.svg" alt="twitter icon" :class="$style.icon">
        </a>
      </li>
      <li v-if="member.sns.github">
        <a :href="member.sns.github">
          <img src="@/assets/images/github-brands.svg" alt="github icon" :class="$style.icon">
        </a>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    member: {
      type: Object,
      required: true
    }
  },
  setup () {
    return {}
  }
})
</script>

<style lang="scss" module>
.wrapper {
  & > div {
    font-size: 2.4rem;
    font-weight: 700;
  }

  & > p {
    min-height: 100px;
  }
}

.sns {
  display: flex;
}

.icon {
  border-radius: 50%;
  width: 24px;
  height: 24px;
  padding: 10px;
}
</style>