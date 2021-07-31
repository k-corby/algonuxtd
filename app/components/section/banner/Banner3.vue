<template>
  <div class="row pb-5">
    <div class="banner" style="margin-top:max(150px, 15vw); position:relative;">
      <div
        style="position:absolute; z-index:2; top:-5vw; right: 0; mix-blend-mode:difference;"
      >
        <img
          class="spinner"
          src="~/assets/img/spin.svg"
          width="1%"
          style="

    filter: invert(100%);
    -webkit-filter: invert(100%);
    opacity: 75%;"
        />
      </div>
      <p class="text-offwhite"></p>
      <h1 class="text-black">
        Algo<br />
        digital<br />
        agency<br />
      </h1>
      <p class="slogan text-black" style="display:block;">
        building modern brands.
      </p>

      <!--<p style=""><img src="~/assets/img/pic.png" width="100%" /></p>-->
    </div>
    <p
      class="float-right"
      style="position:absolute; right:1vw; top:25%; color:#FFF; writing-mode: vertical-rl; text-orientation: mixed; font-size:13px; letter-spacing:0.4vw; font-weight:400; text-transform:lowercase; font-family:'Libre Baskerville';"
    >
      algo - established 2009
    </p>

    <p
      class="float-right"
      style="position:absolute; left:1vw; top:25%; color:#FFF; writing-mode: vertical-rl; text-orientation: mixed; font-size:13px; letter-spacing:0.4vw; font-weight:400; text-transform:lowercase; font-family:'Libre Baskerville';"
    ></p>
    <!--<p
      class="float-right"
      style="position:absolute; left:1vw; bottom:0vw; color:var(--fluro-yellow); font-size:15px; letter-spacing:0vw; font-weight:800; text-transform:lowercase; font-family:'poppins';"
    >
      <span style="margin:0.1vw;">/ db</span><br />
      <span style="margin:0.1vw;">/ ig</span><br />
      <span style="margin:0.1vw;">/ tw</span>
    </p>-->
  </div>
</template>
<style lang="scss" scoped>
.banner {
  padding: 0 1vw 0 0vw;
  max-width: 1600px;
  margin: 0 auto;
}

.spinner {
  animation: rotation 10s infinite linear;
  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
}

p {
  text-align: center;
  font-weight: 500;
  max-width: 100%;
  font-size: max(18px, 1.2vw);
  letter-spacing: 2vw;
  margin-top: -4vw;
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
  position: relative;
  font-size: 20vw;
  line-height: 80%;
  letter-spacing: -1vw;
  font-family: "hero-new", "hero-new", "Libre Baskerville", "hero-new",
    "Libre Baskerville", "Poppins", Tiro Bangla, Georgia, "Times New Roman",
    Times, serif;
  font-weight: 800;
  text-transform: uppercase;
  opacity: 0.95;
  margin: 4vw 0 5vw 0vw;
  text-align: left;
  color: #111;

  u {
    text-decoration-color: var(--fluro-yellow);
  }
}

/*h1::before {
  content: "-";
  position: absolute;
  left: -5vw;
  top: 20%;
  font-size: 8vw;
  font-family: "poppins";
  font-weight: 100;
}

h1::after {
  content: "-";
  position: absolute;
  right: -5vw;
  top: 20%;
  font-size: 8vw;
  font-family: "poppins";
  font-weight: 100;
}*/

.yellow-stroke {
  -webkit-text-stroke: 0.5vw var(--fluro-yellow);
  -webkit-text-fill-color: transparent;
  line-height: 80%;
}

.white-stroke {
  -webkit-text-stroke: 0.5vw var(--white);
  -webkit-text-fill-color: transparent;
  line-height: 80%;
}
</style>
