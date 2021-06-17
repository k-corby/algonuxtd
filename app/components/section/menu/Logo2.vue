<template>
  <div>
    <div id="logo">
      <NuxtLink to="/">algo</NuxtLink>
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
  margin: max(50px, 5vw) 0 0 max(30px, 5vw);

  a {
    font-size: max(50px, 3.2vw);
    font-family: "", "Libre Baskerville", "hero-new", "Libre Baskerville",
      "hero-new", sans-serif;
    font-weight: 900;
    line-height: 1;

    margin-top: -1vw;
    color: #ffffff; /*#e1ff00*/
    letter-spacing: -4px;
    text-decoration-thickness: 5px;
    text-transform: lowercase;
    text-decoration: underline;
    :hover {
      text-decoration: underline;
      text-decoration-thickness: 5px;
      text-decoration-color: var(--white);
      text-transform: lowercase;
      color: var(--white);
      border: 0.3vw solid var(--white); /* #FFCE09*/
      background-color: transparent;
    }
  }
}

@media (max-width: 1200px) {
  #logo {
    /*margin: max(60px, 3.5vw) 0 0 max(40px, 3vw);*/
    /*a::after {
      content: "lgo";
    }
    a {
      background-color: transparent;
      color: white;
      font-size: max(70px, 4vw);
      text-decoration: underline;
      text-decoration-color: var(--fluro-yellow);
    }*/
  }
}
</style>

<script lang="ts"></script>
