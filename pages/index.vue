<template>
  <div>
    <div class="grid">
      <main>
        <div class="">
             <AppNavigation />
          <div class="header bg-banner">
            <div id="banner">
              <div id="scroll-down"></div>
              <h1 class="br-top">ideas, brands<span class="break"> <span>&</span> concepts.</span>          
              </h1>
              <p class="slogan">
              A design agency built to build modern brands.
              </p>
             <!--<div id="scroll-down">
             <DownArrow /></div>-->
            </div>
          </div>
       <PortfolioList />
          <div data-aos="fade-in" data-aos-duration="2000" class="bg_white" data-anchor="Page 3">
            <div class="pl pr pt_10 pb bg_blue text_white">
              <h1 class="mt poppins trans_stroke">Recent work.</h1>
              <p class="caption">
                Learn how to solve simple to complex programming problems.
              </p>
            </div>
            
            <article data-aos="fade-in" data-aos-duration="2000" class="">
              <img class="scale-crop" src="~../assets/img/banner/ui-design.jpg" />
              
            </article>
            <article data-aos="fade-in" data-aos-duration="2000" class="">
              <img class="scale-crop" src="~../assets/img/banner/ipad.jpg" />
              
            </article>
          </div>

          <div
            class="row_fluid bg_white"
            style="padding-top: 250px"
          >
            <div>
              <img width="100%" src="../assets/img/services.png" />
            </div>
            <div
              class="row-space-right pl pr"
            >
              <h1 class="mt poppins">
                Featured<br />
                algorithms
              </h1>
              <p>
                We break down programming concepts to simple pseudocode and then
                show you how to program them....
              </p>
              <p class="mrg-top-50">
                <a class="btn btn-fixed" href="/home/philosophy"
                  >Explore &rarr;</a
                >
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template
