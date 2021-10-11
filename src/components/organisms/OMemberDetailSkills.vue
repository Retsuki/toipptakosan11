<template>
  <div :class="$style.wrapper">
    <div>Skills</div>

    <ul :class="$style.tags">
      <li v-for="skill of skills" :key="skill">
        <span :class="$style.tag">{{ skill }}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    skills: {
      type: Array as PropType<string[]>,
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
  padding-top: 60px;

  & > div {
    font-size: 2.4rem;
    font-weight: 700;
  }
}

.tags {
  display: flex;
  flex-wrap: wrap;

  & > li {
    padding: 10px 8px;
  }
}

.tag {
  display: inline-block;
  padding: 6px 16px;
  color: #fff;
  background-color: #666666;
  border-radius: 25px;
  font-weight: 700;
}
</style>