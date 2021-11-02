<template>
  <div :class="$style.wrapper">
    <m-label-input v-model="name" label-text="名前" flex-column />

    <div>
      <span>職種</span>
      <select id="" name=""></select>
    </div>

    <div>
      <span>自己紹介</span>
      <textarea id="" name="" cols="30" rows="10"></textarea>
    </div>

    <m-label-input
      v-model="company"
      label-text="現在勤めている会社"
      flex-column
    />

    <div>
      <span>実務経験年数</span>
      <select id="" name=""></select>
    </div>

    <div>
      <m-label-input v-model="company" label-text="facebook" flex-column />
      <m-label-input v-model="company" label-text="twitter" flex-column />
      <m-label-input v-model="company" label-text="github" flex-column />
    </div>

    <div>
      <m-label-input v-model="company" label-text="会社名" flex-column />
      <m-label-input v-model="company" label-text="入社日" flex-column />
      <m-label-input v-model="company" label-text="退社日" flex-column />
      <div>
        <span>仕事内容</span>
        <textarea id="" name="" cols="30" rows="10"></textarea>
      </div>
      <div>
        <span>使用言語</span>
        <select id="" name=""></select>
      </div>
      <div>
        <span>ポジション</span>
        <select id="" name=""></select>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  setup() {
    const profile = reactive({
      name: '',
      occupation: '',
      self_introduction: '',
      company: '',
      experience_year: 0,
      profile_image: '',
      sns: {
        facebook: '',
        twitter: '',
        github: '',
      },
      experience: [],
      skills: [],
    })
    return {
      ...toRefs(profile),
    }
  },
})
</script>

<style lang="scss" module>
.wrapper {
  width: 300;
  height: 100%;
  margin: auto;

  @media (min-width: 768px) {
    width: 600px;
  }

  @media (min-width: 1024px) {
    width: 1200px;
  }
}
</style>
