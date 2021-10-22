<template>
  <section :class="$style.wrapper">
    <div>Experience</div>

    <div :class="$style.contents">
      <ul>
        <li
          v-for="{ company, describe, occupation, skills } of member.experience"
          :key="company"
        >
          <div :class="$style.point" />
          <div :class="$style.cardBox">
            <div :class="$style.cardContents">
              <div :class="$style.companyName">{{ company }}</div>
              <div :class="$style.companyPosition">{{ occupation[0] }}</div>
              <div :class="$style.companyDescription">{{ describe }}</div>
              <ul :class="$style.companySkills">
                <li v-for="skill of skills" :key="`${company}-${skill}`">
                  <span>{{ skill }}</span>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    member: {
      type: Object,
      required: true,
    },
  },
  setup() {
    return {}
  },
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

.contents {
  & > ul {
    padding-top: 60px;

    & > li {
      position: relative;
      width: 100%;

      &:last-child {
        .cardBox {
          border-left: 0;
        }
      }
    }
  }
}

.point {
  position: absolute;
  top: 0;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: gray;
}

.cardBox {
  border-left: 3px solid #c1c1c1;
  margin-left: 32px;
}

.cardContents {
  padding-left: 84px;
  padding-bottom: 40px;
}

.companyName {
  font-size: 1.5rem;
}

.companyPosition {
  font-size: 1rem;
  margin-top: 11px;
}

.companyDescription {
  font-size: 1rem;
  font-weight: normal;
  min-height: 45px;
  margin-top: 11px;
}

.companySkills {
  display: flex;
  flex-wrap: wrap;

  & > li {
    margin: 0 10px;

    & > span {
      border-radius: 25px;
      font-size: 12px;
      background-color: #666666;
      color: #fff;
      padding: 5px 10px 5px;
    }

    &:first-child {
      margin-left: 0;
    }
  }
}
</style>
