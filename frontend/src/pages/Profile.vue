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
      :placeholder="textareaPlaceholder"
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

    <a-button text="保存する" :class="$style.button" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

const textareaPlaceholder =
  '箇条書きでできることや好きなことを書いてみましょう。\n\n・Vue, Nuxt出来ます\n\n・Frontend大好き'

const occupations = [
  'ソフトウェアエンジニア',
  'iOSエンジニア',
  'Androidエンジニア',
]

export default defineComponent({
  setup() {
    const profile = reactive({
      name: '',
      occupation: '',
      self_introduction: '',
      sns: {
        facebook: '',
        twitter: '',
        github: '',
      },
    })
    return {
      ...toRefs(profile),
      occupations,
      textareaPlaceholder,
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

.button {
  width: 100%;
  margin-top: 30px;
}
</style>
