<template>
  <div :class="$style.wrapper">
    <h1>Member</h1>

    <ul>
      <li
        v-for="{
          id,
          updatedAt,
          name,
          occupation,
          company,
          experience_year,
          profile_image,
        } of members"
        :key="id"
        :class="$style.card"
      >
        <router-link :to="`/member/${id}`" :class="$style.cardContent">
          <img :src="profile_image.url" :class="$style.profileImage" />
          <div>
            <div :class="$style.name">{{ name }}</div>
            <ul>
              <li>職種: {{ occupation[0] }}</li>
              <li>経験年数: {{ experience_year }}年</li>
              <li>勤務先: {{ company }}</li>
              <li>最終更新日: {{ updatedAt }}</li>
            </ul>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import useMembers from '../composables/members'

export default defineComponent({
  setup() {
    const { members, getMembers } = useMembers()

    onMounted(async () => {
      members.value = await getMembers()
    })

    return {
      members,
    }
  },
})
</script>

<style lang="scss" module>
.wrapper {
  width: 100%;
  height: 100%;
  max-width: 1084px;
  margin: 0 auto;
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 60px;
  margin-bottom: 200px;
}

.card {
  margin-bottom: 20px;
}

.cardContent {
  display: grid;
  grid-template-columns: 84px calc(100% - 84px);
  padding: 20px 20px 10px 20px;
  border: 1px solid #efefef;
  border-radius: 14px;
  box-shadow: 10px 5px 5px #dddddd;
  color: #000;
}

.profileImage {
  border-radius: 50%;
  width: 64px;
  height: 64px;
}

.name {
  height: 64px;
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  font-weight: 700;
}
</style>
