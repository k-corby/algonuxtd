<template>
  <div>
    <div id="logo">
      <NuxtLink to="/">algo</NuxtLink>
    </div>
    <div
      style="display:none;position:fixed; mix-blend-mode:difference; font-size:0.7vw; top:6.2vw; left: 9vw; writing-mode: vertical-rl; text-orientation: mixed; font-weight:700; z-index:3000;"
    >
      <p style="color:white; mix-blend-mode:difference;">ALGO</p>
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
    font-size: max(50px, 4vw);
    font-family: "", "Libre Baskerville", "hero-new", "Libre Baskerville",
      "hero-new", sans-serif;
    font-weight: 900;
    /*background: url("~/assets/img/logo.png") no-repeat center center;
    background-size: 80px 80px;
    width: 110px;
    height: 110px;
    /*padding-top: max(10px, 0vw);
    padding-bottom: max(12px, 0.25vw);
    padding-left: max(28px, 1.8vw);
    padding-right: max(32px, 2.1vw);
    
    
    */
    padding: max(22px, 1vw) max(34px, 2.4vw) max(22px, 1.3vw) max(28px, 2vw);
    line-height: 1;
    float: left;

    margin-top: -1vw;
    color: #ffffff; /*#e1ff00*/
    letter-spacing: -5px;
    text-decoration-thickness: 5px;
    text-transform: lowercase;
    text-decoration: underline;
    /*mix-blend-mode: ;text-decoration: none;
    
    text-decoration-thickness: 6px;
    text-decoration-color: var(--fluro-yellow);
    background-color: var(--fluro-yellow); /* #FFCE09*/
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
