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
  mix-blend-mode: normal;
  margin: max(50px, 4.5vw) 0 0 max(30px, 5vw);

  a {
    cursor: pointer;
    font-size: max(60px, 4vw);
    font-family: "", "hero-new", "Martel", "Pacifico", lemongrass-script,
      sans-serif;
    font-weight: 800;
    /*padding-top: max(10px, 0vw);
    padding-bottom: max(12px, 0.25vw);
    padding-left: max(28px, 1.8vw);
    padding-right: max(32px, 2.1vw);*/
    padding: max(22px, 1vw) max(28px, 1.8vw) max(24px, 1vw) max(28px, 1.8vw);
    line-height: 1;
    float: left;
    text-decoration: none;
    margin-top: -1vw;
    color: var(--fluro-yellow);
    background-color: blue;
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
