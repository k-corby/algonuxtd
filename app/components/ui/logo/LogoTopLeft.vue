<template>
  <section>
    <NuxtLink to="/">a</NuxtLink>
  </section>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Audiowide&family=Monoton&family=Zen+Dots&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Damion&family=Engagement&family=Molle:ital@1&family=Sulphur+Point:wght@400;700&display=swap");
section {
  position: fixed;
  z-index: 2000;
  top: 0;
  left: 0vw;
  mix-blend-mode: difference;
  a {
    font-size: max(16px, 3.2vw);
    font-family: "", "", "Libre Baskerville", "hero-new", sans-serif;
    font-weight: 900;
    display: block;
    text-transform: lowercase;
    color: var(--light-blue); /*#e1ff00*/
    padding: 1.1vw 2.4vw 1.3vw 2.6vw;
    background-color: var(--fluro-yellow);
    opacity: 0.95;
    text-decoration: underline;
    text-decoration-thickness: max(1px, 0.3vw);
    text-underline-offset: 2px;
    :hover {
      text-decoration: none;
    }
  }
}
</style>

<script lang="ts"></script>
