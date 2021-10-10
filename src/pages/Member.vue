<template>
  <div :class="$style.wrapper">
    <h1>Member</h1>

    <ul>
      <li 
        v-for="{ id, updatedAt, name, occupation, company, experience_year, profile_image } of members" 
        :key="id"
        :class="$style.card"
      >
        <img :src="profile_image" :class="$style.profileImage">
        <div :class="$style.contents">
          <div :class="$style.name">{{ name }}</div>
          <ul>
            <li>職種: {{ occupation[0] }}</li>
            <li>経験年数: {{ experience_year }}年</li>
            <li>勤務先: {{ company }}</li>
            <li>最終更新日: {{ updatedAt }}</li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import axios from 'axios';


export default defineComponent({
  setup () {
    const members = ref([
      {
          "id": "00-ieizjb",
          "updatedAt": "2021-10-09T16:01:04.582Z",
          "name": "Rちゃん",
          "occupation": [
              "フルスタックエンジニア"
          ],
          "company": "Scheeme株式会社",
          "experience_year": 3,
          "profile_image": 'src/assets/images/me.jpg'
      }
    ])
    // const getMemberMeta = async () => {
    //   const res = await axios({
    //     method: 'GET',
    //     url: 'https://toipptakosan11.microcms.io/api/v1/member-meta',
    //     headers: {
    //       'X-API-KEY': '1c2b6719-9d1e-4b97-8f0d-9db1e28e1b15'
    //     }
    //   })

    //   members.value = res.data
    // }

    // onMounted(getMemberMeta)
    return {
      members
    }
  }
})
</script>

<style lang="scss" module>
.wrapper {
  width: 100%;
  height: 100%;
}

.card {
  display: grid;
  grid-template-columns: 84px calc(100% - 84px);
  padding: 20px 20px 10px 20px;
  border: 1px solid #efefef;
  border-radius: 14px;
  box-shadow: 10px 5px 5px #dddddd;
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