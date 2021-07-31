<template>
  <section>
    <NuxtLink to="/about"><span>01</span>about</NuxtLink>
    <NuxtLink to="/approach"><span>02</span>approach</NuxtLink>
    <NuxtLink to="/work"><span>03</span>work</NuxtLink>
    <NuxtLink to="/contact"><span>04</span>contact</NuxtLink>
  </section>
</template>

<style lang="scss" scoped>
section {
  position: relative;
  padding-left: 6vw;

  @media (max-width: 1000px) {
    margin: -3vw 0;
  }

  a {
    color: var(--off-white);
    letter-spacing: -1vw;
    font-weight: 800;
    font-size: 16vw;
    text-transform: lowercase;
    margin: -1vw 0;
    font-family: "Montserrat", "Libre Baskerville", "Montserrat", Tiro Bangla,
      Georgia, "Times New Roman", Times, serif;
    display: inline-block;
    line-height: 1em;
    text-decoration: none;
    clear: both;

    span {
      font-size: max(20px, 3vw);
      font-family: "Poppins", Georgia, "Times New Roman", Times, serif;
      font-weight: 900;
      letter-spacing: 0;
      color: yellow;
      position: absolute;
      margin-left: -3vw;
      margin-top: -2vw;
    }
  }
  a:hover {
    font-size: 16.2vw;
    text-decoration-color: rgb(32, 32, 255);
    text-decoration-line: underline;
  }
}
</style>
