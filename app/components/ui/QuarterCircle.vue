<template>
  <div class="quarter-circle"></div>
</template>
<style lang="scss" scoped>
.quarter-circle {
  mix-blend-mode: normal;
  overflow: hidden;
  width: 200vh;
  height: 200vh;
  border-radius: 100%;
  position: absolute;
  right: -100vh;
  display: none;
  top: 25%;
  border: max(300px, 27vw) solid var(--mustard);
}
</style>
