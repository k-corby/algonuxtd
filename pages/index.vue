<template>
  <div>
    <div class="grid">
      <main>
        <div class="pt-fs" data-scroll-section>
             <AppNavigation />
          <div
            data-scroll
            data-scroll-speed="1"
            class="header bg-banner"
            data-anchor="Page 1"
          >
        
            <div id="banner">
              <div id="scroll-down">Facebook Dribble</div>
              <h1 data-scroll data-scroll-speed="1.5" class="br-top">ideas, brands<span class="break"> & concepts.</span>          
              </h1>
              <p data-scroll data-scroll-speed="1" class="slogan">
              A design agency built to build modern brands.
              </p>
              <p class="bold"><br></p>
             <div id="scroll-down">
             <DownArrow /></div>
            </div>
          </div>
       <PortfolioList />
          <div class="row_fluid img_fluid bg_white" data-anchor="Page 3">
            <div class="col_span pl pr pt_10 pb bg_blue text_white">
              <h1 class="mt poppins trans_stroke">Recent work.</h1>
              <p class="caption">
                Learn how to solve simple to complex programming problems.
              </p>
            </div>
            <article class="">
              <img src="~../assets/img/banner/programming.jpg" />
              <div class="overlay">
                <div class="text">
                  <h1>Depth First Search</h1>
                  <p>algorithm</p>
                </div>
              </div>
            </article>
            <article class="">
              <img src="~../assets/img/banner/ui-design.jpg" />
              <div class="overlay">
                <div class="text">
                  <h1>Mobile Development Concepts</h1>
                  <p>User Interface Design</p>
                </div>
              </div>
            </article>
            <article class="">
              <img src="~../assets/img/banner/ipad.jpg" />
              <div class="overlay">
                <div class="text">
                  <h1>Cross Platform Development</h1>
                  <p>PROGRAMMING</p>
                </div>
              </div>
            </article>
            <article class="">
              <div class="overlay">
                <div class="text">
                  <h1>Tablet Solutions</h1>
                  <p>Development</p>
                </div>
              </div>
            </article>
          </div>

          <div
            class="row_fluid bg_white"
            style="padding-top: 250px"
            data-anchor="Page 4"
          >
            <div>
              <img width="100%" src="../assets/img/services.png" />
            </div>
            <div
              class="row-space-right pl pr"
              data-aos="fade-up"
              data-aos-duration="3000"
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
