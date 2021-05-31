<template>
  <div id="logo">
    <NuxtLink to="/">a</NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
#logo {
  position: fixed;
  z-index: 2000;
  top: 0;
  left: 0vw;
  mix-blend-mode: difference;
  margin: 3.5vw 0 0 4vw;
  a {
    cursor: pointer;
    font-size: max(50px, 4vw);
    font-family: "", "hero-new", "Martel", "Pacifico", lemongrass-script,
      sans-serif;
    font-weight: 800;
    letter-spacing: -0.325vw;
    padding: 0.2vw 2.15vw 0.5vw 1.75vw;
    color: var(--blue);
    background-color: var(--fluro-yellow);
  }
}
</style>
