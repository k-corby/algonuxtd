<template>
  <div class="row">
    <div class="banner">
      <!--<h1 class="br-top text-white title" style="margin-top:max(300px, 24vw);">
        ideas<span style="letter-spacing:-3vw;">,</span> brands
        <span class="stroke symbol" style="">&</span>
        concepts
      </h1>-->
      <h1 class="br-top text-white title" style="margin-top:max(300px, 21vw);">
        ideas<span style="letter-spacing:-3vw;">,</span> brands
        <span class="stroke" style="">&</span>
        concepts.
      </h1>
      <p class="slogan text-offwhite" style="mix-blend-mode:difference;">
        design agency built to build modern brands.
      </p>
      <p
        class="float-right"
        style="position:absolute; right:1vw; top:50%; color:#CCC; writing-mode: vertical-rl; text-orientation: mixed; font-size:15px; letter-spacing:1px; font-weight:700; text-transform:lowercase;"
      >
        Algo - info@algo.com.au
      </p>
      <!--<p class="slogan text-offwhite" style="mix-blend-mode:difference;">
        A design agency built to build modern brands.
      </p>-->
    </div>
  </div>
</template>
<style lang="scss" scoped>
.row {
  height: 100vh;
}
.banner {
  padding: 0 0 0 6vw;
  max-width: 1600px;
}

p {
  font-weight: 400;
  max-width: 100%;
  font-size: max(18px, 1.3vw);
  letter-spacing: 1.1vw;
  font-family: "Martel", sans-serif;
  margin-top: -4vw;
  text-transform: lowercase;
  @media (max-width: 1000px) {
    margin-top: 8vw;
  }
}

.symbol {
  font-size: 20vw;
  letter-spacing: -2vw;
  margin-left: -2vw;
  border-color: #ffeb51;
}

h1 {
  font-size: 12vw;
  line-height: 90%;
  letter-spacing: -0.8vw;
  font-family: "hero-new", "Libre Baskerville", "Poppins", Tiro Bangla, Georgia,
    "Times New Roman", Times, serif;
  font-weight: 900;
  text-transform: uppercase;
  margin: 0 0 5vw 0vw;
  opacity: 0.95;
  text-align: initial;
}

.title2 {
  font-size: 11vw;
  line-height: 0%;
  letter-spacing: -0.8vw;
  font-family: "hero-new", "Libre Baskerville", "Poppins", Tiro Bangla, Georgia,
    "Times New Roman", Times, serif;
  font-weight: 900;
  text-transform: uppercase;
  margin: 0 0 5vw 0vw;
  opacity: 0.95;
}

.stroke {
  -webkit-text-stroke: 0.5vw var(--fluro-yellow);
  -webkit-text-fill-color: transparent;
  line-height: 80%;
}

@media (max-width: 1000px) {
  .banner {
    padding: 0 0 0 4vw;
  }
  h1 {
    font-size: 24vw;
    letter-spacing: -2.5vw;
    text-transform: lowercase;
    line-height: 70%;
  }

  .symbol {
    font-size: 25vw;
    border-color: #ffeb51;
    display: none;
  }
  .stroke {
    -webkit-text-stroke: 1vw var(--fluro-yellow);
    -webkit-text-fill-color: transparent;
    line-height: 80%;
  }
}
</style>
