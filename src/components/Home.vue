<template>
  <div :class="$style.wrapper">
    <div :class="[$style.block, $style.introduction]">
      <img
        src="../assets/images/me.jpg"
        alt="self image"
        :class="$style.selfImage"
      >

      <div :class="$style.selfIntro">
        <ol>
          <li>Name: Retsuki Yoneichi</li>
          <li>Age: 22</li>
          <li>Hobby: reading romatic novels</li>
        </ol>
      </div>
    </div>

    <div :class="[$style.block, $style.career]">
      <ol>
        <li v-for="(item, i) in career" :key="i">
          <div :class="$style.careerTerm">
            {{ item.term }}
          </div>

          <div :class="$style.careerDetail">
            <ol>
              <li v-if="item.name">組織名: {{ item.name }}</li>
              <li>技術: {{ item.technology }}</li>
              <li>役職: {{ item.position }}</li>
              <li>取り組んだこと: {{ item.worked }}</li>
            </ol>
          </div>
        </li>
      </ol>
    </div>

    <div :class="[$style.block, $style.sns]">
      <div>
        <a href="https://www.facebook.com/profile.php?id=100007980480408">
          <img
            src="../assets/images/facebook-brands.svg"
            alt="facebook image"
            :class="$style.snsImage"
          >
        </a>

        <a href="https://twitter.com/duz_mk">
          <img
            src="../assets/images/twitter-brands.svg"
            alt="twitter image"
            :class="$style.snsImage"
          >
        </a>

        <a href="https://github.com/Retsuki">
          <img
            src="../assets/images/github-brands.svg"
            alt="github image"
            :class="$style.snsImage"
          >
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    const career = [
      {
        term: '2020/05/08 ~ 現在',
        technology: 'Nuxt, Firebase, Algolia',
        position: 'プロジェクトリーダー兼ディペロッパー兼エンジニア採用',
        worked: '認証周り, Bigquery連携, チャット機能, 検索機能, Admin管理機能'
      },

      {
        term: '2019/10/15 ~ 2020/03/31',
        technology: 'Kotlin, Java, JavaScript, AWS(ApiGateway, Lambda)',
        position: '開発',
        worked: 'S3への署名付きファイルアップロード機能, 新規アプリのCMS構築'
      },

      {
        term: '2018/11/01 ~ 2019/04/30',
        technology: 'Python, Keras, AWS(ec2)',
        position: '開発',
        worked: 'データ分析（画像分類）'
      },

      {
        term: '2017/4/01 ~ 2021/03/31',
        name: '東洋大学 情報連携学部 情報連携学科',
        technology: 'Python, C, Java',
        position: '学生',
        worked: 'コンピュータサイエンス'
      }
    ]
    return {
      career
    }
  }
})
</script>

<style lang="scss" module>
.wrapper {
  max-width: 1200px;
  margin: 0 auto;
}

.block {
  margin-bottom: 100px;
}

.introduction {
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1024px) {
    flex-direction: row;
    height: 600px;
  }
}

.selfImage {
  border-radius: 50%;
  width: 250px;
  height: 250px;
  object-fit: cover;
  margin: 100px 0 50px;

  @media (min-width: 1024px) {
    border-radius: 0;
    margin: 0;
    width: auto;
    height: 100%;
  }
}

.selfIntro {
  width: 100%;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  & > ol > li {
    font-size: 20px;
    line-height: 1.5;
  }

  @media (min-width: 1024px) {
    & > ol > li {
    font-size: 28px;
    line-height: 1.5;
  }
  }
}

.career {
  display: flex;
  justify-content: center;
  color: #fff;

  & > ol {
    list-style: none;
  }

  & > ol > li {
    border-left: 3px solid #fff;
    display: flex;
    align-items: baseline;
    padding-bottom: 40px;
  }
}

.careerTerm {
  width: 20%;
  margin-right: 20px;
  padding: 10px;
  border-bottom: 3px solid #fff;
  font-weight: bold;
}

.careerDetail {
  margin-bottom: 20px;
  padding: 0 16px;
  white-space: normal;
}

.sns {
  & > div {
    display: flex;
    justify-content: center;
  }

  & > div > a {
    width: 60px;
    height: 60px;
    background-color: #fff;
    border-radius: 50%;
    margin: 0 10px;
  }
}

.snsImage {
  padding: 15px;
  width: 30px;
  height: 30px;
}
</style>