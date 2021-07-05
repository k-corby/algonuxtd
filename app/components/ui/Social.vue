<template>
  <div id="social">
    <p>Facebook | Instagram | Dribble</p>
    <!--<b-icon-facebook></b-icon-facebook>
    <b-icon-instagram></b-icon-instagram>
    <b-icon-twitter></b-icon-twitter>-->
  </div>
</template>

<style lang="scss" scoped>
#social {
  position: fixed;
  left: 0vw;
  top: 35%;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  /*text-transform: uppercase;*/
  padding: 1vw;
  p {
    font-weight: 800;
    font-size: max(12px, 1vw);
    letter-spacing: 0.5vw;
  }
  svg {
    font-size: max(30px, 2.2vw);
    color: #222;
    font-weight: 900;
    margin-bottom: 1vw;
  }
}
</style>
