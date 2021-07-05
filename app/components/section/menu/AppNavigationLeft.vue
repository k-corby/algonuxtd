<template>
  <section class="c-section">
    <Logo3 />
    <LeftMenu />
    <div
      style="width:1px; height:100vh; position:fixed; z-index:200; top:0vw; left:100px; background-color:white; mix-blend-mode:difference; opacity:0.0;"
    ></div>
    <div class="row"></div>
    <div
      style="position:fixed; z-index:200; bottom:2vw; left:50px; width:1.5px; height: 5vw;
    background-color:#222;"
    ></div>
  </section>
</template>
<style lang="scss" scoped>
.row {
  position: fixed;
  mix-blend-mode: normal;
  z-index: 100;
  left: 0vw;
  width: 100px;
  height: 100vh;
  background-color: rgba(250, 250, 250, 0);
  /*margin: 0vw 0 0 max(30px, 4vw);*/
}

@media (max-width: 1000px) {
  .row {
    background-color: none;
  }

  .menu {
    background-color: pink;
  }
}
</style>
