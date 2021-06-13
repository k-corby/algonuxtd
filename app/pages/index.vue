<template>
  <div>
    <div class="container-fluid bg-banner " style="background-color:#3C47D6; ">
      <div class="circle"></div>
      <!--0000FF  0039FF -->
      <Banner />
      <ScrollDown />
    </div>
    <div class="container-fluid">
      <div class="row">
        <PortfolioList />
      </div>
    </div>
    <div
      data-aos="fade-in"
      data-aos-duration="2000"
      class="bg-white container-fluid"
      data-anchor="Page 3"
    >
      <div class="row pl pr pt-10 pb bg-blue text-white">
        <h1 class="mt poppins trans_stroke">Recent work.</h1>
        <p class="caption">
          custom designs web, apps, print media utilising the technologies.
        </p>
      </div>

      <article data-aos="fade-in" data-aos-duration="2000" class="row">
        <img class="scale-crop" src="~../assets/img/banner/ui-design.jpg" />
      </article>
      <article data-aos="fade-in" data-aos-duration="2000" class="row">
        <img class="scale-crop" src="~../assets/img/banner/ipad.jpg" />
      </article>
    </div>

    <div class="container-fluid bg-white pt-10">
      <div class="row">
        <div class="col-4">
          <img width="100%" src="~../assets/img/services.png" />
        </div>
        <div class="col-8 pl pr">
          <h1 class="mt poppins">
            Some of our<br />
            clients.
          </h1>
          <p>
            We break down programming concepts to simple pseudocode and then
            show you how to program them....
          </p>
          <p class="mrg-top-50">
            <a class="btn btn-fixed" href="/home/philosophy">Explore &rarr;</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.circle {
  width: 200vh;
  height: 200vh;
  border-radius: 100%;
  position: absolute;
  right: -100vh;
  top: 25%;
  border: max(300px, 27vw) solid var(--yellow);
}
.bg-banner {
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
}
.caption {
  font-weight: 300;
  max-width: 60%;
  font-size: min(24px, 1.8vw);
  letter-spacing: 0.7vw;
  font-family: "Martel", sans-serif;
}
</style>
