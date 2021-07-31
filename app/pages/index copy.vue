<template>
  <LocomotiveScroll
    ref="scroller"
    :getted-options="{
      smooth: true,
      direction: 'vertical',
      smartphone: {
        smooth: true,
        direction: 'vertical'
      },
      tablet: {
        smooth: true,
        direction: 'vertical'
      }
    }"
  >
    <section class="c-section container-fluid pt-15" data-scroll-section>
      <div class="o-container">
        <div class="row pb">
          <div class="col-12">
            <div class="pl pr">
              <div
                style="position:absolute; z-index:2; top:-5vw; right: 10vw; mix-blend-mode:normal;"
              >
                <img
                  class="spinner"
                  src="~/assets/img/oval-designapproach.svg"
                />
              </div>
              <hr />
              <h1
                class="poppins uppercase o-title"
                style="line-height:85%; font-weight:400;"
                data-scroll
              >
                <span class="o-title-line"><span>algo</span></span>
                <span class="o-title-line"><span>Digital</span></span>
                <span class="o-title-line"><span>agency.</span></span>
              </h1>
            </div>
            <p
              class="float-right"
              style="position:absolute; right:1vw; top:40%; color:#222; writing-mode: vertical-rl; text-orientation: mixed; font-size:15px; letter-spacing:0.4vw; font-weight:400; text-transform:lowercase; font-family:'Libre Baskerville';"
            >
              We make special sh*t
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="c-section container-fluid pt-15">
      <div class="o-container">
        <div class="row">
          <div class="col-9">
            <img class="" src="~/assets/img/ink.jpg" width="20%" height="20%" />
          </div>
        </div>
      </div>
    </section>
    <section class="c-section container-fluid pt-15">
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
    <section class="c-section container-fluid pt-15">
      <div class="o-container">
        <div class="row">
          <ApproachList />
        </div>
      </div>
    </section>
    <section class="c-section container-fluid pt-15">
      <div class="o-container">
        <div class="row pl pr pt-10 pb bg-blue text-white">
          <h1 class="mt poppins trans_stroke">Recent work.</h1>
          <p class="caption">
            applications, print and digital media.
          </p>
        </div>

        <article class="row">
          <img
            class=""
            src="~/assets/img/ui-design.jpg"
            width="100%"
            height="100%"
          />
        </article>
        <article class="row">
          <img
            class=""
            src="~/assets/img/ipad.jpg"
            width="100%"
            height="100%"
          />
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
              <img width="100%" height="100vh" src="~/assets/img/client.png" />
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
//setTimeout(function() {
//locomotive.init();
//}, 100);

/*import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  mounted() {
    const locomotive = this.$refs.scroller.locomotive;
    setTimeout(function() {
      locomotive.update();
    }, 100);
    this.initScrolltrigger();
    this.$nextTick(() => {
      const elements = document.querySelectorAll("[data-scroll-trigger]");
      console.log(elements);
      elements.forEach(element => this.elementAnimation(element));
    });
  },
  methods: {
    initScrolltrigger() {
      const locomotive = this.$refs.scroller.locomotive;
      locomotive.on("scroll", ScrollTrigger.update);
      ScrollTrigger.scrollerProxy(locomotive.el, {
        scrollTop(value) {
          return arguments.length
            ? locomotive.scrollTo(value, 0, 0)
            : locomotive.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight
          };
        }
      });
    },
    elementAnimation(element) {
      gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          scroller: this.$refs.scroller.locomotive.el,
          scrub: true,
          start: "top bottom",
          end: "bottom center"
        },
        scaleY: 0,
        ease: "none"
      });
    }
  }
};*/
</script>
<style lang="scss" scoped>
hr {
  background-color: black;
  margin: 4vw 0;
  height: 0.5vw;
  width: 10vw;
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
  min-width: 0.05em;
  font-size: 16vw;
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
  padding: 2.5rem 0;
  perspective: 600px;
  -webkit-perspective: 600px;
}

.o-container {
  margin-right: auto;
  margin-left: auto;
  max-width: 95rem;
}
.c-section {
  position: relative;
}
.o-scroll {
  background-color: #d4c9c9;
}
.has-scroll-smooth [data-scroll-container] {
  min-height: 100vh;
}
</style>
