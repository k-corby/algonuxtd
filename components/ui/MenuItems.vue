<template>
  <div id="menu">
    <h2>
      <NuxtLink to="/about"><span class="num">01</span>about</NuxtLink>
    </h2>
    <h2>
      <NuxtLink to="/approach"><span class="num">02</span>approach</NuxtLink>
    </h2>
    <h2>
      <NuxtLink to="/about"><span class="num">03</span>work</NuxtLink>
    </h2>
    <h2>
      <NuxtLink to="/about"><span class="num">04</span>contact</NuxtLink>
    </h2>
  </div>
</template>

<style lang="scss" scoped>
#menu {
  position: relative;
  padding-left: 10vw;
  a {
    color: #222;
    display: inline-block;
    line-height: 1em;
    text-decoration: none;
  }
  a:hover {
    font-size: 16.2vw;
    text-decoration-color: rgb(32, 32, 255);
    text-decoration-line: underline;
  }
  .num {
    font-size: 3.4vw;
    font-family: "Poppins", Georgia, "Times New Roman", Times, serif;
    font-weight: 800;
    letter-spacing: 0;
    color: rgba(255, 255, 255, 0.932);
    position: absolute;
    margin-left: -4vw;
    margin-top: 0vw;
  }
  h2 {
    color: #fff;
    margin-left: 2vw;
    letter-spacing: -0.7vw;
    font-weight: 1000;
    font-size: 16vw;
    margin: -5.5vw 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    /*font-family: "Georgia", "Libre Baskerville", Verdana, Geneva, Tahoma,
      sans-serif;*/
  }
}
</style>
