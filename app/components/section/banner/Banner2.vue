<template>
  <div class="row pb" style="position:relative; z-index:100;">
    <div class="banner">
      <div style="position">
        <div style=" mix-blend-mode:normal; margin:0 auto;">
          <h1
            class="br-top text-offwhite title"
            style="margin-top:max(130px, 19vw);"
          >
            brands<br />
            <span class="">&</span>
            <span>ideas</span>.
          </h1>
          <p
            class="slogan text-offwhite text-center"
            style="color:#CCC; display:block;"
          >
            building modern brands.
          </p>
        </div>
      </div>
      <p
        class="float-right"
        style="position:absolute; right:1vw; top:26vw; color:#FFF; writing-mode: vertical-rl; text-orientation: mixed; font-size:13px; letter-spacing:0.4vw; font-weight:400; text-transform:lowercase; font-family:'Libre Baskerville';"
      >
        established 2009
      </p>
      <!--<p
        class="float-right"
        style="position:absolute; left:1vw; top:26vw; color:#FFF; writing-mode: vertical-rl; text-orientation: mixed; font-size:13px; letter-spacing:0.4vw; font-weight:400; text-transform:lowercase; font-family:'Libre Baskerville';"
      >
        digital agency
      </p>
      <p
        class="float-right"
        style="position:absolute; left:1vw; bottom:0vw; color:#F8F8F8; font-size:15px; letter-spacing:0vw; font-weight:800; text-transform:lowercase; font-family:'poppins';"
      >
        <span style="margin:0.1vw;">db</span><br />
        <span style="margin:0.1vw;">ig</span><br />
        <span style="margin:0.1vw;">tw</span>
      </p>-->
    </div>
  </div>
</template>
<style lang="scss" scoped>
.banner {
  padding: 0 0vw 0 0vw;
  max-width: 1600px;
  margin: 0 auto;
}

p {
  font-weight: 500;
  max-width: 100%;
  font-size: max(18px, 1.2vw);
  letter-spacing: 1.3vw;
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
  font-size: 14vw;
  line-height: 90%;
  letter-spacing: 0.1vw;
  font-family: "", "", "Libre Baskerville", "hero-new", "Libre Baskerville",
    "Poppins", Tiro Bangla, Georgia, "Times New Roman", Times, serif;
  font-weight: 900;
  text-transform: uppercase;
  margin: 0 0 5vw 0vw;
  opacity: 0.95;
  text-align: center;

  u {
    text-decoration-color: var(--fluro-yellow);
  }
}

h1::before {
  content: "-";
  position: absolute;
  left: -7vw;
  top: 20%;
  font-size: 8vw;
  font-family: "poppins";
  font-weight: 100;
}

h1::after {
  content: "-";
  position: absolute;
  right: -7vw;
  top: 20%;
  font-size: 8vw;
  font-family: "poppins";
  font-weight: 100;
}

.title2 {
  font-size: 17vw;
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
