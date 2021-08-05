<template>
  <div>
    <div id="logo">
      <NuxtLink to="/">a</NuxtLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Audiowide&family=Monoton&family=Zen+Dots&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Damion&family=Engagement&family=Molle:ital@1&family=Sulphur+Point:wght@400;700&display=swap");
#logo {
  position: fixed;
  z-index: 2000;
  top: 2vw;
  left: 2vw;
  mix-blend-mode: normal;

  a {
    font-size: max(35px, 2.9vw);
    font-family: "", "", "Libre Baskerville", "hero-new", sans-serif;
    font-weight: 900;
    display: block;
    text-decoration: line-through;
    text-transform: lowercase;
    background-color: black;
    color: rgb(255, 255, 255); /*#e1ff00*/
    text-align: right;
    padding: max(16px, 1vw) max(27px, 1.9vw) max(21px, 1.2vw) max(28px, 1.9vw);
    :hover {
      text-decoration: none;
    }
  }
}
</style>

<script lang="ts"></script>
