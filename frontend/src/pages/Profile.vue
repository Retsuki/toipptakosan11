<template>
  <div :class="$style.wrapper">
    <a-heading :level="1" :class="$style.content"> プロフィール設定 </a-heading>

    <m-label-input
      v-model="name"
      label-text="名前"
      placeholder="Rちゃん"
      flex-column
      :margin="6"
      :class="$style.content"
    />

    <m-label-textarea
      v-model="self_introduction"
      label-text="自己紹介"
      placeholder="箇条書きでできること、できるかもしれないことを書きましょう。&#13;&#13;・Vue出来ます&#13;&#13;・Nuxt出来ます&#13;&#13;・GCP（build, run, redis）出来ます"
      flex-column
      :margin="6"
      :class="$style.content"
    />

    <m-label-select
      v-model="occupation"
      label-text="職種"
      :items="occupations"
      flex-column
      :margin="6"
      :class="$style.content"
    />

    <m-label-input
      v-model="sns.facebook"
      label-text="Facebook"
      placeholder="https://www.facebook.com/profile.php?id=100007980480408"
      flex-column
      :margin="6"
      :class="$style.content"
    />

    <m-label-input
      v-model="sns.twitter"
      label-text="Twitter"
      placeholder="https://twitter.com/duz_mk"
      flex-column
      :margin="6"
      :class="$style.content"
    />

    <m-label-input
      v-model="sns.github"
      label-text="Github"
      placeholder="https://github.com/Retsuki"
      flex-column
      :margin="6"
      :class="$style.content"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

const occupations = [
  'ソフトウェアエンジニア',
  'iOSエンジニア',
  'Androidエンジニア',
]

const experienseYearItems = [
  '未経験',
  '１年未満',
  '１年〜３年',
  '３年〜５年',
  '５年以上',
]

export default defineComponent({
  setup() {
    const profile = reactive({
      name: '',
      occupation: '',
      self_introduction: '',
      company: '',
      experience_year: '',
      sns: {
        facebook: '',
        twitter: '',
        github: '',
      },
    })
    return {
      ...toRefs(profile),
      occupations,
      experienseYearItems,
    }
  },
})
</script>

<style lang="scss" module>
.wrapper {
  width: 300px;
  height: 100%;
  margin: 30px auto 60px;

  @media (min-width: 768px) {
    width: 600px;
  }
}

.content {
  margin-bottom: 24px;
}
</style>
