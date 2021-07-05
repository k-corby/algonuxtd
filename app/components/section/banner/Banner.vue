<template>
  <div
    class="row pb-5"
    style="position:relative; z-index:100;width:100%; height:100vh; padding-top:max(220px, 14vw);"
  >
    <div>
      <h1
        class="poppins uppercase"
        style="line-height:85%; position:absolute; z-index:200;"
      ></h1>
      <p style=""><img src="~/assets/img/h.png" width="75%" /></p>
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
    >
      digital agency
    </p>
  </div>
</template>
<style lang="scss" scoped>
hr {
  background-color: black;
  margin: 4vw 0;
  height: 0.5vw;
  width: 10vw;
}
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
  font-size: 14vw;
  line-height: 90%;
  letter-spacing: 0vw;
  font-family: "", "poppins", "Libre Baskerville", "hero-new",
    "Libre Baskerville", "Poppins", Tiro Bangla, Georgia, "Times New Roman",
    Times, serif;
  font-weight: 400;
  text-transform: uppercase;
  margin: 5vw 0 10vw 0vw;
  text-align: left;
  padding-left: 15vw;

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

.stroke {
  -webkit-text-stroke: 0.7vw var(--fluro-yellow);
  -webkit-text-fill-color: transparent;
  line-height: 80%;
}
</style>
