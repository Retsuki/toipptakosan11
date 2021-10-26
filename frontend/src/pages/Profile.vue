<template>
  <div :class="$style.wrapper">
    <div :class="$style.labelInput">
      <span>名前</span>
      <input type="text" />
    </div>

    <div>
      <span>職種</span>
      <select name="" id=""></select>
    </div>

    <div>
      <span>自己紹介</span>
      <textarea name="" id="" cols="30" rows="10"></textarea>
    </div>

    <div :class="$style.labelInput">
      <span>現在勤めている会社</span>
      <input type="text" />
    </div>

    <div>
      <span>実務経験年数</span>
      <select name="" id=""></select>
    </div>

    <div>
      <div :class="$style.labelInput">
        <span>facebook</span>
        <input type="text" />
      </div>
      <div :class="$style.labelInput">
        <span>twitter</span>
        <input type="text" />
      </div>
      <div :class="$style.labelInput">
        <span>github</span>
        <input type="text" />
      </div>
    </div>

    <div>
      <div :class="$style.labelInput">
        <span>会社名</span>
        <input type="text" />
      </div>
      <div :class="$style.labelInput">
        <span>入社日</span>
        <input type="text" />
      </div>
      <div :class="$style.labelInput">
        <span>退社日</span>
        <input type="text" />
      </div>
      <div>
        <span>仕事内容</span>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>
      <div>
        <span>使用言語</span>
        <select name="" id=""></select>
      </div>
      <div>
        <span>ポジション</span>
        <select name="" id=""></select>
      </div>
    </div>
  </div>
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
  width: 100%;
  height: 100%;
}

.labelInput {
}
</style>
