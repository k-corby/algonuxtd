<template>
  <LocomotiveScroll
    ref="scroller"
    :getted-options="{
      smooth: true,
      repeat: false,
      direction: 'vertical',
      smartphone: {
        smooth: true,
        direction: 'vertical'
      },
      tablet: {
        smooth: false,
        direction: 'vertical'
      }
    }"
    data-scroll-container
    class="bg-light-brown"
  >
    <section
      class="c-section container-fluid bg-light-brown"
      data-scroll-section
      style="padding-top:max(100px,12vw);"
    >
      <div class="o-container">
        <div class="row">
          <div class="col-12">
            <div class="pl pr">
              <div
                style="position:absolute; z-index:2; top:-4vw; right: 12vw; mix-blend-mode:normal;"
              >
                <img
                  class=""
                  width=""
                  src="~/assets/img/oval-designapproach.svg"
                  style="width:0vw;"
                />
              </div>
              <hr />
              <h1 class="o-title" data-scroll data-scroll-speed="4">
                <span
                  class="o-title-line"
                  style="padding-left:0vw; font-weight:600;"
                  ><span>algo</span></span
                >
                <span
                  class="o-title-line"
                  style="padding-left:3vw; font-weight:600;"
                  ><span>digital</span></span
                >
                <span
                  class="o-title-line"
                  style="padding-left:3vw; font-weight:600;"
                  ><span>agency</span></span
                >
              </h1>
              <p
                data-scroll
                data-scroll-speed="4"
                style="display:block;  text-align: center;
  font-weight: 500;
  max-width: 100%;
  font-size: max(18px, 1.2vw);
  letter-spacing: 2vw;
  margin-top: -7vw;
  text-transform: lowercase;"
              >
                building modern brands.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="c-section container-fluid pt-10 pl" data-scroll-section>
      <div class="o-container">
        <div class="row justify-content-end">
          <div class="col-9" data-scroll data-scroll-speed="2">
            <img class="" width="70%" src="~/assets/img/ink.jpg" />
          </div>
          <p
            class="float-right"
            style="position:absolute; right:2vw; top:40%; color:#222; writing-mode: vertical-rl; text-orientation: mixed; font-size:max(15px,1.5vw); letter-spacing:0.7vw; font-weight:400; text-transform:lowercase; font-family:'Libre Baskerville';"
          >
            We make special sh*t
          </p>
        </div>
      </div>
    </section>
    <section
      class="c-section container-fluid "
      data-scroll-section
      data-scroll-speed="1"
    >
      <div class="o-container">
        <div class="row pl pr pb pt">
          <div class="col-10">
            <h4>
              We are a Digital design and development partner for advertising &
              marketing agencies, for both large and small businesses. Would you
              like to know more about our expertise or are you curious about our
              approach?
            </h4>
          </div>
        </div>
      </div>
    </section>
    <section class="c-section container-fluid pt-15" data-scroll-section>
      <div class="o-container">
        <div class="row">
          <ApproachList />
        </div>
      </div>
    </section>
    <section class="c-section container-fluid pt-15" data-scroll-section>
      <div class="o-container">
        <div class="row pl pr pt-10 pb bg-blue text-white">
          <h1 class="mt poppins trans_stroke">Recent work.</h1>
          <p class="caption">
            applications, print and digital media.
          </p>
        </div>

        <article class="row" data-scroll>
          <img class="" src="~/assets/img/ui-design.jpg" />
        </article>
        <article class="row" data-scroll>
          <img class="" src="~/assets/img/ipad.jpg" />
        </article>
      </div>
    </section>
    <section class="c-section container-fluid pt-15" data-scroll-section>
      <div class="o-container">
        <div class="row pl pr pb pt-15">
          <div class="col-12">
            <h1
              class="pb-5 d-flex justify-content-center"
              style="line-height:85%; font-size:max(20px, 3vw); letter-spacing:0.3vw; font-weight:400;"
            >
              people we have worked with.
            </h1>
            <p>
              <img src="~/assets/img/client.png" />
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="c-section container-fluid pt-15" data-scroll-section>
      <div class="o-container">
        <div class="row" style="position:relative;">
          <h2
            class="pr pl pb"
            style="font-family:poppins;position:absolute; z-index:2; bottom:0; right:0; color:white; text-align:right; line-height:80%; font-size:18vw; letter-spacing:-1vw;"
          >
            We <br />Make<br />
            Different.
          </h2>
          <img
            class="scale-crop"
            src="https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          />
        </div>
      </div>
    </section>
  </LocomotiveScroll>
</template>
<script>
export default {
  mounted() {
    const locomotive = this.$refs.scroller.locomotive;
    console.log(locomotive);
    setTimeout(function() {
      locomotive.update();
    }, 100);
  }
};
</script>
<style lang="scss" scoped>
hr {
  background-color: var(--fluro-yellow);
  background: linear-gradient(90deg, red 50%, blue 50%);
  height: 0.4vw;
  width: 10vw;
  margin: 0 0 4vw 0;
}
h2 {
  font-size: 17vw;
  font-weight: 700;
  line-height: 75%;
  letter-spacing: -0.4vw;
  color: #222;
}

h4 {
  font-family: "hero-new";
  font-size: max(24px, 3vw);
  line-height: max(38px, 4vw);
  letter-spacing: max(1px, 0.2vw);
}

p {
  font-weight: 500;
  font-size: max(23px, 1.3vw);
  line-height: max(34px, 2.5vw);
  letter-spacing: max(3px, 0.2vw);
}
.circle {
  width: 200vh;
  height: 200vh;
  border-radius: 100%;
  position: absolute;
  right: -100vh;
  top: 25%;
  border: max(300px, 27vw) solid var(--yellow);
}
.caption {
  font-weight: 300;
  max-width: 60%;
  font-size: min(24px, 1.8vw);
  letter-spacing: 0.7vw;
  font-family: "Martel", sans-serif;
}

.o-title.is-inview .o-title-line:first-child {
  transition-delay: 0.5s;
}
.o-title.is-inview .o-title-line:nth-child(2) {
  transition-delay: 1s;
}
.o-title.is-inview .o-title-line:nth-child(3) {
  transition-delay: 1.5s;
}

.o-title-line span {
  display: inline-block;
  font-size: 21vw;
  line-height: 49%;
  font-family: "Montserrat", "Libre Baskerville", "Cormorant+Garamond",
    Tiro Bangla, Georgia, "Times New Roman", Times, serif;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: -1.8vw;
  color: #000;
}
.o-title.is-inview .o-title-line {
  transform: none;
  opacity: 1;
}
.o-title-line {
  display: block;
  opacity: 0;
  transform-origin: center top;
  transform-style: preserve-3d;
  transform: translateY(100%) rotateX(-80deg);
  transition: opacity 0.8s cubic-bezier(0.215, 0.61, 0.355, 1),
    transform 0.8s cubic-bezier(0.215, 0.61, 0.355, 1);
  font-size: 0;
}

.o-title {
  margin: 0;
  perspective: 600px;
  -webkit-perspective: 600px;
}

.has-scroll-smooth [data-scroll-container] {
  min-height: 100vh;
}
</style>
