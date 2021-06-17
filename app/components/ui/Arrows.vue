<template>
  <div class="arrows d-flex flex-row">
    <div class="left">
      <b-icon-arrow-left-short></b-icon-arrow-left-short>
    </div>
    <div class="right">
      <b-icon-arrow-right-short></b-icon-arrow-right-short>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.arrows {
  div {
    color: white;
    font-size: max(10px, 2vw);
    font-weight: 100;
    padding: 0.5vw 1vw;
  }
  .left {
    align-content: center;
    border: 1px solid rgba(255, 255, 255, 0.6);
  }

  .right {
    border: 1px solid rgba(255, 255, 255, 0.6);
  }
}
</style>
