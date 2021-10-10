<template>
  <header :class="$style.wrapper">
      <router-link to="/" :class="$style.logo">Rちゃんワールド</router-link>

      <div :class="$style.rightContents">
        <ul :class="$style.list">
          <li><router-link to="/" :class="$style.link">home</router-link></li>
          <li><router-link to="/member" :class="$style.link">member</router-link></li>
          <!-- <li><router-link to="/member" :class="$style.link">jobs</router-link></li> -->
          <!-- <li><router-link to="/member" :class="$style.link">about</router-link></li> -->
        </ul>
      </div>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    return {}
  }
})
</script>

<style lang="scss" module>
.wrapper {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  height: 80px;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  font-weight: bold;
  font-size: 1rem;
}

.logo {
  font-size: 1.25rem;
  color: #000;
}

.rightContents {
  display: flex;
  justify-content: flex-end;
}

.list {
  display: flex;

  & > li {
    padding: 0 36px 0;
    border-right: 1px solid #666666;

    &:last-child {
      border-right: 0;
    }
  }
}

.link {
  color: #000;
}
</style>