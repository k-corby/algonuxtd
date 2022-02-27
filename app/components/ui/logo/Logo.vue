<template>
  <section>
    <NuxtLink to="/">algo</NuxtLink>
  </section>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Audiowide&family=Monoton&family=Zen+Dots&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Damion&family=Engagement&family=Molle:ital@1&family=Sulphur+Point:wght@400;700&display=swap");
section {
  position: fixed;
  top: max(20px, 2.5vw);
  mix-blend-mode: difference;
  left: max(60px, 4.5vw);
  z-index: 2000;
  a {
    font-size: max(30px, 2.5vw);
    text-align: center;
    width: 100%;
    font-family: "", "poppins", "Libre Baskerville", "hero-new", sans-serif;
    font-weight: 800;
    display: block;
    text-transform: lowercase;
    letter-spacing: -3px;
    writing-mode: vertical-rl;
    text-orientation: mixed;
    color: rgb(236, 236, 236); /*#e1ff00*/
    text-decoration: none;
    opacity: 1;
    text-decoration-thickness: max(1px, 0.17vw);
    text-underline-offset: 1px;
    :hover {
      text-decoration: none;
    }
  }
}
</style>

<script lang="ts"></script>
