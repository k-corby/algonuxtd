<template>
  <div class="row pb">
    <div class="banner">
      <div style="position:relative; z-index:100;">
        <div
          style="position:relative; z-index:20; top:0; mix-blend-mode:normal;"
        >
          <h1
            class="br-top text-white title"
            style="margin-top:max(280px, 18vw);"
          >
            ideas <span class="stroke">&</span>
            <span
              style="background: linear-gradient(to bottom, transparent, transparent 50%, var(--pink) 50%, var(--pink) 100%);"
              >brands</span
            >.
          </h1>
          <p class="slogan text-offwhite" style="color:#CCC; display:block;">
            digital agency building modern brands.
          </p>
        </div>
      </div>
      <p
        class="float-right"
        style="position:absolute; right:1vw; top:40%; color:#FFF; writing-mode: vertical-rl; text-orientation: mixed; font-size:13px; letter-spacing:0.4vw; font-weight:400; text-transform:lowercase; font-family:'Libre Baskerville';"
      >
        established 2009
      </p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.row {
}
.banner {
  padding: 0 0vw 0 8vw;
  max-width: 1600px;
}

p {
  font-weight: 500;
  max-width: 100%;
  font-size: max(18px, 1.2vw);
  letter-spacing: 1.3vw;
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
  font-size: 16vw;
  line-height: 80%;
  letter-spacing: 0vw;
  font-family: "", "", "Libre Baskerville", "hero-new", "Libre Baskerville",
    "Poppins", Tiro Bangla, Georgia, "Times New Roman", Times, serif;
  font-weight: 900;
  text-transform: uppercase;
  margin: 0 0 5vw 0vw;
  opacity: 0.95;
  text-align: initial;

  u {
    text-decoration-color: var(--fluro-yellow);
  }
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
  -webkit-text-stroke: 0.7vw var(--fluro-yellow);
  -webkit-text-fill-color: transparent;
  line-height: 80%;
}
/*
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
}*/
</style>
