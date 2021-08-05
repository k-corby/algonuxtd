<template>
  <h1 class="block-effect" style="--td: 1.2s" data-scroll data-scroll-speed="4">
    <div class="block-reveal" style="--bc: #4040bf; --d: .1s">
      algo
    </div>
    <div class="block-reveal" style="--bc: #bf4060; --d: .5s">
      Digital
    </div>
    <div class="block-reveal" style="--bc: #bf4060; --d: .9s">
      Agency
    </div>
  </h1>
</template>
<style lang="scss" scoped>
.block-effect {
  display: inline-block;
  font-size: 21vw;
  font-family: "Montserrat", "Libre Baskerville", "Cormorant+Garamond",
    Tiro Bangla, Georgia, "Times New Roman", Times, serif;
  text-transform: uppercase;
  font-weight: 500;
  line-height: 70%;
  letter-spacing: -1.8vw;
  color: #000;
}

.block-reveal {
  --t: calc(var(--td) + var(--d));

  color: transparent;
  padding: 4px;

  position: relative;
  overflow: hidden;

  animation: revealBlock 0s var(--t) forwards;
}

.block-reveal::after {
  content: "";

  width: 0%;
  height: 100%;
  padding-bottom: 4px;

  position: absolute;
  top: 0;
  left: 0;

  background: var(--bc);
  animation: revealingIn var(--td) var(--d) forwards,
    revealingOut var(--td) var(--t) forwards;
}

/* animations */
@keyframes revealBlock {
  100% {
    color: #0f0f0f;
  }
}

@keyframes revealingIn {
  0% {
    width: 0;
  }

  100% {
    width: 100%;
  }
}

@keyframes revealingOut {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(100%);
  }
}
</style>
