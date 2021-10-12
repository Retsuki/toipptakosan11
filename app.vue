<template>
  <div>
    <organisms-global-header />
    <NuxtPage :class="$style.mainContents" />
    <organisms-global-footer />
  </div>
</template>

<style lang="scss" module>
@import "./assets/scss/style.scss";
.mainContents {
  min-height: 100vh;
  max-height: 100%;
}
</style>