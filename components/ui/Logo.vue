<template>
  <div id="logo">
    <NuxtLink to="/">a<!--<img src="~/assets/img/logo.png">--></NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
#logo {
  position: fixed;
  z-index: 1000;
  top: 0;
  mix-blend-mode: difference;
}
</style>
