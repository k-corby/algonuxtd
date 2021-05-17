<template>
  <div id="menu">
    <h2>
      <NuxtLink to="/about"><span class="num">01</span>about</NuxtLink>
    </h2>
    <h2>
      <NuxtLink to="/about"><span class="num">02</span>services</NuxtLink>
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
    color: rgb(32, 32, 255);
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
    letter-spacing: -0.9vw;
    font-weight: 800;
    font-size: 15vw;
    margin: -5vw 0;
    font-family: "Poppins", "Libre Baskerville", Verdana, Geneva, Tahoma,
      sans-serif;
  }
}
</style>
