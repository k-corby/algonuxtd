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
        <rect x="0" y="300" width="320" height="16" />
        <rect x="0" y="350" width="260" height="16" />
      </g>
    </svg>
  </b-button>
</template>
<style lang="scss" scoped>
#nav-btn {
  mix-blend-mode: difference;
  position: fixed;
  z-index: 2000;
  top: 45%;
  left: 15px;
  font-size: 2vw;
  letter-spacing: 0.1vw;
  display: block;
  background: none;
  border: none;
  opacity: 1;
  svg {
    width: 60px;
    height: 100px;
    @media (max-width: 1000px) {
      width: 50px;
    }
  }
}
</style>
