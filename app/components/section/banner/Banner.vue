<template>
  <div class="banner row">
    <h1 class="br-top text-white title" style="margin-top:max(250px, 24vw);">
      ideas<span style="letter-spacing:-3vw;">,</span>
      brands
      <span class="stroke symbol" style="">&</span>
      concepts
    </h1>
    <p class="slogan text-offwhite" style="mix-blend-mode:difference;">
      A design agency built to build modern brands.
    </p>
  </div>
</template>
<style lang="scss" scoped>
.banner {
  padding: 0 6vw 0 6vw;
  max-width: 1600px;
  margin: 0 auto;
  padding-bottom: 10vw;
  height: 100vh;
}

p {
  margin-top: -4vw;
  font-weight: 300;
  max-width: 100%;
  font-size: min(26px, 1.8vw);
  letter-spacing: 0.9vw;
  font-family: "Martel", sans-serif;
}
.caption {
  font-weight: 300;
  max-width: 60%;
  font-size: min(24px, 1.8vw);
  letter-spacing: 0.7vw;
  font-family: "Martel", sans-serif;
}

h1 {
  font-size: 15vw;
  line-height: 20%;
  letter-spacing: -1.5vw;
  font-family: "Libre Baskerville", "Poppins", Tiro Bangla, Georgia,
    "Times New Roman", Times, serif;
  font-weight: 700;
  text-transform: lowercase;
  margin: 0 0 5vw 0vw;
  opacity: 0.95;
}

.title2 {
  font-size: 11vw;
  line-height: 0%;
  letter-spacing: -0.6vw;
  font-family: "hero-new", "Libre Baskerville", "Poppins", Tiro Bangla, Georgia,
    "Times New Roman", Times, serif;
  font-weight: 900;
  text-transform: uppercase;
  margin: 0 0 5vw 0vw;
  opacity: 0.95;
}

@media (max-width: 1000px) {
  h1 {
    font-size: 22vw;
    line-height: 60%;
  }

  .symbol {
    font-size: 24vw;
    letter-spacing: -2vw;
    margin-left: -2vw;
    border-color: #ffeb51;
  }
}
</style>
