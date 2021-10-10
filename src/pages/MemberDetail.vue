<template>
  <div :class="$style.wrapper">
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
import { defineComponent, ref } from 'vue'
import OMemberDetailExperience from '../components/organisms/OMemberDetailExperience.vue'
import OMemberDetailSelfIntroduction from '../components/organisms/OMemberDetailSelfIntroduction.vue'
import OMemberDetailSkills from '../components/organisms/OMemberDetailSkills.vue'

export default defineComponent({
  components: { 
    OMemberDetailSelfIntroduction, 
    OMemberDetailExperience,
    OMemberDetailSkills
  },
  setup () {
    const member = ref({
      "id": "00-ieizjb",
      "createdAt": "2021-10-09T16:01:04.582Z",
      "updatedAt": "2021-10-10T10:08:20.032Z",
      "publishedAt": "2021-10-09T16:01:04.582Z",
      "revisedAt": "2021-10-10T10:08:20.032Z",
      "name": "Rちゃん",
      "occupation": [
          "ソフトウェアエンジニア"
      ],
      "self_introduction": "我輩は神なのである！",
      "company": "Scheeme株式会社",
      "experience_year": 3,
      "profile_image": {
          "url": "https://images.microcms-assets.io/assets/9421560ec69942e593804ba2141f0553/c2d1b5de05e04e5ba33e73501c628391/IMG_2893.JPG",
          "height": 1104,
          "width": 828
      },
      "sns": {
          "fieldId": "object",
          "facebook": "https://www.facebook.com/profile.php?id=100007980480408",
          "twitter": "https://twitter.com/duz_mk",
          "github": "https://github.com/Retsuki"
      },
      "experience": [
          {
              "fieldId": "career",
              "company": "Scheeme株式会社",
              "from": "2020-05-07T15:00:00.000Z",
              "describe": "。。。",
              "skills": [
                  "Python",
                  "JavaScript",
                  "Vue",
                  "GCP"
              ],
              "occupation": [
                  "ソフトウェアエンジニア"
              ]
          },
          {
              "fieldId": "career",
              "company": "ココネ株式会社",
              "from": "2020-10-14T15:00:00.000Z",
              "to": "2021-03-30T15:00:00.000Z",
              "describe": "・・・",
              "skills": [
                  "Python",
                  "JavaScript",
                  "Java",
                  "Kotlin",
                  "AWS"
              ],
              "occupation": [
                  "ソフトウェアエンジニア"
              ]
          },
          {
              "fieldId": "career",
              "company": "株式会社Lightblue Technology",
              "from": "2018-10-31T15:00:00.000Z",
              "to": "2019-04-29T15:00:00.000Z",
              "describe": "。。。",
              "skills": [
                  "Python",
                  "JavaScript",
                  "AWS"
              ],
              "occupation": [
                  "ソフトウェアエンジニア"
              ]
          }
      ],
      "skills": [
        "Python",
        "JavaScript",
        "Java",
        "Kotlin",
        "Vue",
        "GCP"
      ]
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