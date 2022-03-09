<template>
  <section>
    <div>
      <h1>
        We Craft<br />
        Things.
      </h1>
    </div>
    <div class="stack">
      <img
        src="~/assets/img/app-dev.jpg"
        width="100%"
      />
    </div>
  </section>
</template>
<style lang="scss" scoped>
section{
  position:relative;
  padding-top:max(170px, 10vw);
  height:100vh;
   background: url("~/assets/img/app-dev.jpg") no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

  .stack{
    position:absolute;
    top:0;
    z-index:-1;

    img{
      height:100vh;
    }
  }
}
h1 {
  font-size: 20vw;
  font-family: "Nanum Myeongjo", Serif, "Montserrat", "Libre Baskerville",
    "Cormorant+Garamond", Tiro Bangla, Serif, "Times New Roman", Times, serif,
    Geneva, Tahoma, sans-serif, Georgia, "Times New Roman", Times, serif;
  font-weight: 100;
  letter-spacing: 0vw;
  text-transform: uppercase;
  line-height: 80%;
  color: #fff;
  margin:0 0 0 5vw;
}
</style>
