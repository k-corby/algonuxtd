<template>
  <b-button id="nav-btn" v-b-toggle.sidebar-right>
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 455 455"
      style="enable-background:new 0 0 455 455;"
      xml:space="preserve"
      fill="#FFF"
    >
      <g>
        <rect x="100" y="270" width="150" height="12" />
        <rect x="40" y="220" width="290" height="12" />
      </g>
    </svg>
  </b-button>
</template>
<style lang="scss" scoped>
#nav-btn {
  mix-blend-mode: difference;
  position: fixed;
  top: 1%;
  right: 0;
  z-index: 2000;
  margin: 2vw 6vw 0 0;
  display: block;
  background: none;
  border: none;
  svg {
    width: 60px;
    height: 100px;
    @media (max-width: 1000px) {
      width: 50px;
    }
  }
}
</style>
