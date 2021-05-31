<template>
  <div>
    <div class="container-fluid bg-banner bg-dark-blue">
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
.symbol {
  font-size: 20vw;
  letter-spacing: -2vw;
  margin-left: -2vw;
  border-color: #ffeb51;
}
</style>
