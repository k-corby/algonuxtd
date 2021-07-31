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
  left: 0vw;
  mix-blend-mode: normal;
  /*margin: 0vw 0 0 max(30px, 4vw);*/
  padding: max(11px, 0.7vw) max(7px, 0.2vw);

  a {
    font-size: 15px;
    font-family: "", "poppins", "Libre Baskerville", "hero-new", sans-serif;
    font-weight: 600;
    background: url("~/assets/img/logo.png") no-repeat center center;
    background-size: max(30px, 2.2vw) max(30px, 2.2vw);
    height: 6vw;
    width: 4.5vw;
    display: block;
    filter: invert(100%);
    -webkit-filter: invert(100%);
    opacity: 75%;
    text-transform: lowercase;
    color: #fff; /*#e1ff00*/
    text-align: right;
    padding: 12px 0px 0 0px;
    :hover {
      text-decoration: none;
    }
  }
}
</style>

<script lang="ts"></script>
