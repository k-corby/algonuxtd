<template>
  <div id="menu">
    <h2><span class="num">01</span><NuxtLink to="/about">about</NuxtLink></h2>
    <h2><span class="num">02</span> services</h2>
    <h2><span class="num">03</span> works</h2>
    <h2><span class="num">04</span> contact</h2>
  </div>
</template>

<style lang="scss" scoped>
.num {
  font-size: 3.4vw;
  font-family: "Poppins", Georgia, "Times New Roman", Times, serif;
  font-weight: 800;
  letter-spacing: 0;
  color: rgba(255, 255, 255, 0.932);
  position: absolute;
  margin-left: -4vw;
  margin-top: 5vw;
}

.center h2 {
  color: rgb(41, 41, 41);
  margin-left: 2vw;
  letter-spacing: -0.9vw;
  font-weight: 1000;
  font-size: 15vw;
  margin: -5vw 0;
  font-family: "Libre Baskerville", Verdana, Geneva, Tahoma, sans-serif;
}
</style>
