<template>
  <div class="">
    <div class="banner">
      <div class="ribbon"></div>
      <h1 class="text-offwhite text-center">
        <span class="top">ideas &</span><br />
        <span class="stroke" style="margin-left: 0vw">brands</span>
      </h1>
      <p
        class="slogan text-offwhite"
        style="display: block; z-index: 10; position: relative"
      >
        building modern brands.
      </p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&display=swap");
.banner {
  padding: max(240px, 10%) 1vw 0 0vw;
  margin: 0 auto;
  height: 100vh;
}

.ribbon {
  position: absolute;
  z-index: 0;
  top: 0vw;
  right: 10vw;
  mix-blend-mode: normal;
  background-color: red;
  height: 120vh;
  width: 15vw;
}

p {
  text-align: center;
  font-weight: 300;
  max-width: 100%;
  font-size: max(15px, 1.2vw);
  letter-spacing: 2.4vw;
  margin: 1.75vw 0 0 0;
  font-family: "poppins", "Libre Baskerville", sans-serif;
  text-transform: lowercase;
}

.symbol {
  font-size: 20vw;
  letter-spacing: -2vw;
  margin-left: -2vw;
  border-color: #ffeb51;
}

h1 {
  margin: 0 auto;
  font-size: max(100px, 20vw);
  line-height: 75%;
  letter-spacing: -0.2vw;
  font-family: "", "DM Serif Display", "Libre Baskerville", "hero-new",
    "Libre Baskerville", "Poppins", Tiro Bangla, Georgia, "Times New Roman",
    Times, serif;
  font-weight: 900;
  text-transform: uppercase;
  opacity: 0.95;
  width: 100%;
  .top {
    font-size: 20.4vw;
  }
}

@media screen and (max-width: 991px) {
  .ribbon{
    display:none;
  }
}
</style>
