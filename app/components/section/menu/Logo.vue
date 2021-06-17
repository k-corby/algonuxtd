<template>
  <div>
    <div id="logo">
      <NuxtLink to="/"></NuxtLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Audiowide&family=Monoton&family=Zen+Dots&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Damion&family=Engagement&family=Molle:ital@1&family=Sulphur+Point:wght@400;700&display=swap");
#logo {
  position: fixed;
  z-index: 2000;
  top: 0;
  left: 0;
  mix-blend-mode: normal;
  margin: max(50px, 5vw) 0 0 max(30px, 5vw);
  padding: 1vw 1vw;

  a {
    font-size: max(45px, 3vw);
    font-family: "", "", "Libre Baskerville", "hero-new", sans-serif;
    font-weight: 800;
    background: url("~/assets/img/logo.png") no-repeat center center;
    background-size: 65px 65px;
    height: 80px;
    width: 80px;
    display: block;
    text-transform: lowercase;
    color: #222; /*#e1ff00*/
    background-color: blue;
    padding: 1vw 1vw;
  }
}
</style>

<script lang="ts"></script>
