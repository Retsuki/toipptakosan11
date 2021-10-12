<template>
  <div>
    <o-global-header />
    <NuxtPage :class="$style.mainContents" />
    <o-global-footer />
  </div>
</template>

<style lang="scss" module>
.mainContents {
  min-height: 100vh;
  max-height: 100%;
}
</style>