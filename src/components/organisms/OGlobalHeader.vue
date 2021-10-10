<template>
  <header :class="$style.wrapper">
      <router-link to="/" :class="$style.logo">Rちゃんワールド</router-link>

      <div :class="$style.rightContents">
        <ul :class="$style.list">
          <li><router-link to="/member" :class="$style.link">member</router-link></li>
          <li><router-link to="/member" :class="$style.link">jobs</router-link></li>
          <li><router-link to="/member" :class="$style.link">about</router-link></li>
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
  color: #666666
}

.rightContents {
  display: flex;
  justify-content: flex-end;
}

.list {
  display: flex;

  & > li {
    margin-right: 36px;
    padding: 0 10px;

    &:last-child {
      margin-right: 0;
    }
  }
}

.link {
  color: #666666;
}
</style>