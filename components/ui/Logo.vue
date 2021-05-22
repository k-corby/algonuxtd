<template>
  <div id="logo">
    <NuxtLink to="/">a<!--<img src="~/assets/img/logo.png">--></NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
#logo {
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 1vw;
  mix-blend-mode: normal;
  a {
    cursor: pointer;
    font-size: 4.9em;
    text-decoration: underline;
    text-decoration-color: #ffeb51;
    font-family: "Poppins", "Martel", "Pacifico", lemongrass-script, sans-serif;
    font-weight: 800;
    letter-spacing: -5px;
    color: #fff;
    color: blue;
    padding: 2px 33px 6px 28px;
    background-color: #fde637;
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
