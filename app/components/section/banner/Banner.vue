<template>
  <div class="row">
    <div class="banner">
      <!--<h1 class="br-top text-white title" style="margin-top:max(300px, 24vw);">
        ideas<span style="letter-spacing:-3vw;">,</span> brands
        <span class="stroke symbol" style="">&</span>
        concepts
      </h1>-->
      <div style="position:relative; z-index:100;">
        <h1
          class="br-top text-white title"
          style="margin-top:max(300px, 20vw);"
        >
          brands<br />
          <span class="stroke" style="">&</span>
          ideas.
        </h1>
        <p class="slogan text-offwhite" style="color:#CCC;">
          building morden brands.
        </p>
      </div>
      <p
        class="float-right"
        style="position:absolute; right:3vw; top:50%; color:#CCC; writing-mode: vertical-rl; text-orientation: mixed; font-size:15px; letter-spacing:5px; font-weight:700; text-transform:uppercase; font-family:'poppins';"
      >
        established in 2009
      </p>
      <!--<p
        class="float-left"
        style="position:absolute; left:3vw; top:40%; color:#CCC; writing-mode: vertical-rl; text-orientation: mixed; font-size:15px; letter-spacing:0.75vw; font-weight:600; text-transform:uppercase; font-family:'hero-new';"
      >
        Digital agency
      </p>-->
      <p
        style="position:absolute; left:6vw; bottom:3vw; color:white; letter-spacing:0px; font-size:2.5vw; font-weight:700;"
      >
        01
      </p>
      <!--<p class="slogan text-offwhite" style="mix-blend-mode:difference;">
        A design agency built to build modern brands.
      </p>-->
      <div class="circle"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.circle {
  overflow: hidden;
  position: absolute;
  height: 50vw;
  top: 20%;
  right: -0%;
  p {
    border: 10vw solid #e9ec32;
    border-radius: 500vw;
    height: 100%;
    width: 100%;
  }
}
.row {
  height: 100vh;
}
.banner {
  padding: 0 1vw 0 0vw;
  max-width: 1600px;
  margin: 0 auto;
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
  font-size: 11.6vw;
  line-height: 90%;
  letter-spacing: 0.3vw;
  font-family: "", "Libre Baskerville", "Poppins", Tiro Bangla, Georgia,
    "Times New Roman", Times, serif;
  font-weight: 900;
  text-transform: uppercase;
  margin: 0 0 5vw 0vw;
  opacity: 0.95;
  text-align: initial;
}

.title2 {
  font-size: 15.5vw;
  line-height: 50%;
  letter-spacing: -1.5vw;
  font-family: "", "Libre Baskerville", "Poppins", Tiro Bangla, Georgia,
    "Times New Roman", Times, serif;
  font-weight: 900;
  text-transform: lowercase;
  margin: 0 0 5vw 0vw;
  opacity: 0.95;
}

.title3 {
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
