<template>
  <div id="logo">
    <NuxtLink to="/">a<!--<img src="~/assets/img/logo.png">--></NuxtLink>
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
    font-size: max(60px, 4.6vw);
    font-family: "hero-new", "Martel", "Pacifico", lemongrass-script, sans-serif;
    font-weight: 800;
    letter-spacing: -0.325vw;

    padding: 0px 30px 4px 25px;

    color: blue;
    background-color: #ffeb51;

    /*text-decoration: underline;
      text-decoration-color: #ffeb51;
      text-decoration-thickness: 0.5vw;
      color: #ffffff;
      text-transform: lowercase;
      margin: 0;
      padding-left: 1vw;*/
  }
}
</style>
