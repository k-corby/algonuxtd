<template>
  <section>
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      width="30vw"
      height="30vw"
      viewBox="0 0 300 300"
      enable-background="new 0 0 300 300"
      xml:space="preserve"
    >
      <defs>
        <path
          id="circlePath"
          d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
        />
      </defs>
      <circle cx="150" cy="100" r="75" fill="none" />
      <g>
        <use xlink:href="#circlePath" fill="none" />
        <text fill="#666">
          <textPath xlink:href="#circlePath">
            ideas brands & concepts
          </textPath>
        </text>
      </g>
    </svg>
  </section>
</template>

<style lang="scss" scoped>
section {
  position: absolute;
  z-index: 2;
  top: -6vw;
  right: 6vw;
  mix-blend-mode: normal;

  svg {
    -webkit-animation-name: rotate;
    -moz-animation-name: rotate;
    -ms-animation-name: rotate;
    -o-animation-name: rotate;
    animation-name: rotate;
    -webkit-animation-duration: 15s;
    -moz-animation-duration: 15s;
    -ms-animation-duration: 15s;
    -o-animation-duration: 15s;
    animation-duration: 15s;
    -webkit-animation-iteration-count: infinite;
    -moz-animation-iteration-count: infinite;
    -ms-animation-iteration-count: infinite;
    -o-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;
    -moz-animation-timing-function: linear;
    -ms-animation-timing-function: linear;
    -o-animation-timing-function: linear;
    animation-timing-function: linear;
    text {
      font-family: "Poppins", "Libre Baskerville", "Cormorant+Garamond",
        Tiro Bangla, Georgia, "Times New Roman", Times, serif;
      text-transform: uppercase;
      font-size: max(10px, 0.5vw);
      letter-spacing: 0.7vw;
      font-weight: 500;
      color: rgb(189, 189, 189);
    }
  }

  @-webkit-keyframes rotate {
    from {
      -webkit-transform: rotate(0);
    }
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-moz-keyframes rotate {
    from {
      -moz-transform: rotate(0deg);
    }
    to {
      -moz-transform: rotate(360deg);
    }
  }
  @-ms-keyframes rotate {
    from {
      -ms-transform: rotate(0deg);
    }
    to {
      -ms-transform: rotate(360deg);
    }
  }
  @-o-keyframes rotate {
    from {
      -o-transform: rotate(0deg);
    }
    to {
      -o-transform: rotate(360deg);
    }
  }
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
}
</style>
