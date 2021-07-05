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
    <section class="c-section" data-scroll-section>
      <div class="o-container">
        <h1
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="-10"
          data-scroll-position="left"
        >
          Hey
        </h1>
        <p data-scroll>👋</p>
        <h2 data-scroll data-scroll-speed="1">What's up?</h2>
        <p data-scroll data-scroll-speed="2">😬</p>
      </div>
    </section>

    <section class="c-section" data-scroll-section>
      <div class="o-container">
        <div class="c-cta">
          <h1 class="o-title" data-scroll>
            <span class="o-title_line">
              <span>If you</span>
            </span>
            <span class="o-title_line">
              <span>Enjoyed</span>
            </span>
            <span class="o-title_line u-white">
              <span>Scrolling</span>
            </span>
          </h1>
          <hr class="c-cta_line" data-scroll data-scroll-offset="100" />
          <div class="c-cta_content">
            <div class="o-layout -gutter">
              <div class="o-layout_item u-2/5@from-medium">
                <p class="u-label">
                  Github
                </p>
              </div>
              <div class="o-layout_item u-3/5@from-medium">
                <div class="c-cta_section">
                  <div
                    class="c-cta_content_text"
                    data-scroll
                    data-scroll-offset="100"
                  >
                    <h3>Check out Locomotive Scroll</h3>
                    <p>
                      This library has evolved considerably over the years. The
                      architecture and conventions shift according to our
                      projects.
                    </p>
                    <p>
                      Visit the GitHub repository page for a complete
                      introduction and list of available options. Search the
                      GitHub issue tracker carefully to check if your
                      issue/feature has already been reported/requested before
                      opening a new issue or submitting a pull request.
                    </p>
                  </div>
                  <button
                    class="c-cta_button o-button"
                    href="https://github.com/locomotivemtl/locomotive-scroll"
                    target="_blank"
                    data-scroll
                    data-scroll-offset="100"
                  >
                    <span class="o-button_icon"> </span>
                    Check on Github
                    <span class="o-button_arrow u-icon">
                      →
                    </span>
                  </button>
                </div>
                <hr
                  class="c-cta_line -margin"
                  data-scroll
                  data-scroll-offset="100"
                />
                <div class="c-cta_section">
                  <div
                    class="c-cta_content_text"
                    data-scroll
                    data-scroll-offset="100"
                  >
                    <h4>Neue Montreal <br />Pangram Pangram® Foundry</h4>
                    <p>
                      You like the font used on this page? Well this is your
                      lucky day. You can get it on
                      <a
                        class="o-link -underline"
                        href="https://pangrampangram.com/"
                        target="_blank"
                        >pangrampangram.com</a
                      >! Thanks to our good friend Mathieu Desjardins ❤️
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section data-scroll-section>
      <div class="o-container">
        <div class="c-damn">
          <h1 class="o-title" data-scroll>
            <span class="o-title_line">
              <span>
                Damn
              </span>
            </span>
            <span class="o-title_line">
              <span>
                You really
              </span>
            </span>
            <span class="o-title_line">
              <span>
                like to
              </span>
            </span>
            <span class="o-title_line u-white">
              <span>
                scroll
              </span>
            </span>
          </h1>
        </div>
      </div>
    </section>
  </LocomotiveScroll>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.c-cta_button {
  opacity: 0;
  transform-origin: center top;
  transform-style: preserve-3d;
  transform: translateY(100%) rotateX(-80deg);
  transition: opacity 0.8s cubic-bezier(0.215, 0.61, 0.355, 1),
    transform 0.8s cubic-bezier(0.215, 0.61, 0.355, 1);
  margin-top: 5.625rem;
}
.o-button {
  position: relative;
  z-index: 1;
  color: #fff;
  padding: 2rem 2.1875rem;
  font-size: 1.5rem;
  background-color: #272727;
  width: 100%;
  text-align: left;
}

.c-cta_button.is-inview {
  opacity: 1;
  transition-delay: 0.2s;
  transform: none;
}

.o-button_icon {
  display: inline-block;
  vertical-align: middle;
  width: 3.4375rem;
  height: 3.4375rem;
  margin-right: 0.9375rem;
}

.u-icon {
  font-family: Lucida Grande;
  font-size: 1.125rem;
}

.o-button_arrow {
  position: absolute;
  top: 50%;
  right: 2.1875rem;
  transform: translateY(-50%);
}

h1 {
  font-size: 12vw;
  line-height: 0.9;
  text-transform: uppercase;
}
.o-title_line span {
  display: inline-block;
  min-width: 0.05em;
  font-size: 12vw;
}
.o-title.is-inview .o-title_line:first-child {
  transition-delay: 0.4s;
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
.o-title.is-inview .o-title_line:nth-child(2) {
  transition-delay: 0.5s;
}
.o-title.is-inview .o-title_line:nth-child(3) {
  transition-delay: 0.6s;
}
.o-title.is-inview .o-title_line:nth-child(4) {
  transition-delay: 0.7s;
}
.o-title.is-inview .o-title_line {
  transform: none;
  opacity: 1;
}
.o-title_line {
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
</style>
