<template>
  <div>
    <div class="container-fluid bg-banner bg-dark-grey">
      <div class="row" id="banner">
        <div id="scroll-down"></div>
        <div style="position:absolute; z-index:100; mix-blend-mode:difference;">
          <h1
            class="br-top text-white"
            style="font-size:25vw; line-height:60%; letter-spacing:-2.5vw;"
          >
            ideas & concepts
          </h1>
          <p class="slogan text-offwhite">
            A design agency built to build modern brands.
          </p>
        </div>
        <!--<div id="scroll-down">
      <DownArrow /></div>-->
        <div id="circle">
          <svg width="800" height="1000" xmlns="http://www.w3.org/2000/svg">
            <g>
              <title>Layer 1</title>
              <ellipse
                stroke-width="10vw"
                ry="362.5"
                rx="362.5"
                id="svg_2"
                cy="495.5"
                cx="485"
                stroke="transparent"
                fill="transparent"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
    <PortfolioList />
    <div
      data-aos="fade-in"
      data-aos-duration="2000"
      class="bg-white"
      data-anchor="Page 3"
    >
      <div class="pl pr pt_10 pb bg-blue text-white">
        <h1 class="mt poppins trans_stroke">Recent work.</h1>
        <p class="caption">
          custom designs web, apps, print media utilising the technologies.
        </p>
      </div>

      <article data-aos="fade-in" data-aos-duration="2000" class="">
        <img class="scale-crop" src="~../assets/img/banner/ui-design.jpg" />
      </article>
      <article data-aos="fade-in" data-aos-duration="2000" class="">
        <img class="scale-crop" src="~../assets/img/banner/ipad.jpg" />
      </article>
    </div>

    <div class="row_fluid bg-white" style="padding-top: 250px">
      <div>
        <img width="100%" src="~../assets/img/services.png" />
      </div>
      <div class="row-space-right pl pr">
        <h1 class="mt poppins">
          Featured<br />
          algorithms
        </h1>
        <p>
          We break down programming concepts to simple pseudocode and then show
          you how to program them....
        </p>
        <p class="mrg-top-50">
          <a class="btn btn-fixed" href="/home/philosophy">Explore &rarr;</a>
        </p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
#circle {
  position: absolute;
  z-index: 0;
  width: 400px;
  height: 1000px;
  right: 0vw;
  top: 10vw;
  overflow: hidden;
}
</style>
