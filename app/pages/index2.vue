<template>
  <div>
    <div class="container-fluid bg-banner" style="background-color:#0011FF;">
      <QuarterRing />
      <Banner2 />
    </div>
    <div class="container-fluid" style="padding-top: 20vw;">
      <div class="row pl pr">
        <div class="col-12"></div>
      </div>
      <div class="row pl pr">
        <div class="col-12">
          <h2 class="poppins" style="line-height:85%;">
            Our Story.
          </h2>
          <hr />
          <p>
            Objectives inform students the learning outcomes of the class. What
            will they know? What will they be able to do? Why is this important
            to know? It's an effective way to assess their learning progress.
          </p>
        </div>
      </div>
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
          Web, application & print media.
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
hr {
  background-color: black;
  margin: 4vw 0;
  height: 0.5vw;
  width: 10vw;
}
h2 {
  font-size: 13vw;
  font-weight: 800;
  line-height: 75%;
  letter-spacing: -0.8vw;
  color: #222;
}

p {
  margin: 0 0 5vw 0;
  font-size: 180%;
  line-height: 40px;
}

.col-4 p {
  font-size: max(18px, 1.2vw);
  letter-spacing: 0.03vw;
}

.bg-banner {
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
}
.caption {
  font-weight: 500;
  max-width: 60%;
  font-size: min(24px, 1.8vw);
  letter-spacing: 0.6vw;
  font-family: "Libre Baskerville", sans-serif;
}
</style>
