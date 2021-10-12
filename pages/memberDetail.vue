<template>
  <div v-if="member" :class="$style.wrapper">
    <div :class="$style.header">
      <div :class="$style.headerContent">
        <img :src="member.profile_image.url" alt="profile image">
        <div :class="$style.rightContents">
          <h3>{{ member.name }}</h3>
          <div>{{ member.company }} / {{ member.occupation[0] }}</div>
          <div>ID: {{ member.id }}</div>
        </div>
      </div>
    </div>

    <main :class="$style.main">
      <o-member-detail-self-introduction :member="member" />
      <o-member-detail-experience :member="member" />
      <o-member-detail-skills :skills="member.skills" />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import OMemberDetailSelfIntroduction from '../components/organisms/OMemberDetailSelfIntroduction.vue'
import OMemberDetailExperience from '../components/organisms/OMemberDetailExperience.vue'
import OMemberDetailSkills from '../components/organisms/OMemberDetailSkills.vue'
import { useRoute } from 'vue-router'
import useMembers from '../composables/members'

export default defineComponent({
  components: {
    OMemberDetailSelfIntroduction, 
    OMemberDetailExperience,
    OMemberDetailSkills
  },
  setup () {
    const route = useRoute()
    const { member, getMember } = useMembers()

    onMounted(() => {
      getMember(route.params.id as string)
    })
    return {
      member
    }
  }
})
</script>

<style lang="scss" module>
.wrapper {
  width: 100%;
  height: 100%;
  margin-bottom: 200px;
}

.header {
  min-height: 270px;
  max-height: 360px;
  background-color: gray;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}

.headerContent {
  color: #fff;
  padding-top: 60px;
  min-width: 720px;
  max-width: 860px;
  margin: 0px auto;
  display: grid;
  grid-template-columns: calc(128px + 30px) 1fr;

  & > img {
    object-fit: cover;
    width: 128px;
    height: 128px;
    border-radius: 50%;
  }
}

.rightContents {
  height: 128px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: 700;

  & > h3 {
    font-size: 2rem;
    margin: 0; 
  }
}

.main {
  padding-top: 60px;
  padding-bottom: 60px;
  min-width: 720px;
  max-width: 860px;
  margin: 0px auto;
}

</style>