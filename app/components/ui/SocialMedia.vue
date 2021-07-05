<template>
  <div id="social">
    <b-icon-facebook></b-icon-facebook>
    <b-icon-instagram></b-icon-instagram>
    <b-icon-twitter></b-icon-twitter>
  </div>
</template>

<style lang="scss" scoped>
#social {
  position: relative;
  left: 0vw;
  bottom: 1vw;
  p {
    font-weight: 800;
    font-size: max(12px, 1vw);
    letter-spacing: 0.5vw;
  }
  svg {
    font-size: max(18px, 1.2vw);
    color: var(--fluro-yellow);
    font-weight: 900;
  }
}
</style>
