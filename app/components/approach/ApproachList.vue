<template>
  <section class="c-section container-fluid">
    <div
      v-for="item in data.items"
      :key="item.id"
      class="row mb-20 mt-20 pl-5 pr-5"
      style="position:relative;"
      data-scroll
      data-scroll-offset="100"
    >
      <div class="ml mr">
        <p class="num">0{{ item.id }}</p>
        <h2 class="pb-5">{{ item.section }}</h2>

        <p class="info pt-5">
          {{ item.text }}
        </p>
      </div>
      <div class="ml mr" style="background-color:transparent; ">
        <!--<img
          class="scale-crop"
          :src="require('../../assets/img/uploads/' + item.img)"
          style="mix-blend-mode:normal; opacity:1;"
        />-->
      </div>
    </div>
  </section>
</template>
<script>
import json from "./data.json";
export default {
  data() {
    return { data: json };
  },
  computed: {
    order: function() {
      //return console.log(1);
    }
  }
};
</script>
<style lang="scss" scoped>
.mt-20 {
  margin-top: 20vw;
}
.mb-20 {
  margin-bottom: 20vw;
}

.ml {
  margin-left: 13vw;
}

.mr {
  margin-right: 13vw;
}

.row {
  opacity: 0;
  transform-origin: center top;
  transform-style: preserve-3d;
  transform: translateY(100%) rotateX(-80deg);
  transition: opacity 0.8s cubic-bezier(0.215, 0.61, 0.355, 1),
    transform 0.8s cubic-bezier(0.215, 0.61, 0.355, 1);
  margin-top: 5.625rem;
}

.row.is-inview {
  opacity: 1;
  transition-delay: 0.2s;
  transform: none;
}

p.info {
  font-size: max(22px, 1.9vw);
  line-height: max(33px, 3vw);
  font-weight: 400;
  color: #111;
  letter-spacing: 0.25vw;
  text-align: left;
  font-family: "hero-new", "Helvetica Neue", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
    sans-serif;
}

p.info::after {
  content: "";
  display: block;
  width: 100px;
  height: 0.8vw;
  margin-top: max(30px, 5vw);
  background-color: black;
}

p.num {
  font-size: 12vw;
  font-family: "Poppins", Georgia, "Times New Roman", Times, serif;
  font-weight: 800;
  letter-spacing: -1vw;
  color: rgb(230, 230, 230);
  position: absolute;
  top: 0;
  margin-left: -8vw;
}

h4 {
  font-size: 3vw;
  font-family: "Libre Baskerville", Georgia, "Times New Roman", Times, serif;
  font-weight: 100;
  letter-spacing: 0px;
}

h2 {
  font-size: 16.5vw;
  position: relative;
  z-index: 200;
  font-family: "", "Libre Baskerville", Georgia, "Times New Roman", Times, serif;
  font-weight: 900;
  color: #111;
  letter-spacing: -1vw;
  text-decoration: underline;
  text-decoration-style: double;
  text-decoration-color: red;
  text-underline-offset: 20px;
  text-decoration-thickness: 1vw;
}

h3 {
  margin: -4vw 0 -1vw 0;
  font-size: 4.5vw;
  color: blue;
}

@media (max-width: 1000px) {
  .row_fluid {
    grid-template-columns: 1fr;
    height: unset;

    img {
      display: none;
    }
  }
  .row_fluid:nth-child(even) {
    display: block;
    flex-direction: row-reverse;
    width: 100%;
    grid-template-columns: none;
  }

  .row_fluid:nth-child(even) img {
    width: 100%;
  }

  .mb-15 {
    margin-bottom: 0;
  }
  .mt-10 {
    margin-top: 0;
  }

  .scale-crop {
    height: 40vh;
  }

  p {
    font-size: 135%;
    line-height: 32px;
    letter-spacing: 0.3vw;
    margin-top: 0;
  }

  p.num {
    display: none;
  }

  h2 {
    position: initial;
    top: 0;
    font-size: max(30px, 10vw);
    letter-spacing: 0.6vw;
  }
  .row_fluid:nth-child(even) div:nth-child(1) h2,
  .row_fluid:nth-child(even) div:nth-child(1) p.num {
    margin-left: 0vw;
    top: 0;
  }

  .row_fluid:nth-child(odd) div:nth-child(2) {
    margin-left: 13vw;
  }

  .row_fluid:nth-child(even) div:nth-child(1) {
    margin-left: 13vw;
  }

  .row_fluid:nth-child(even) div:nth-child(2) {
    margin-right: 13vw;
    margin-left: 13vw;
    width: 74%;
  }

  .row_fluid:nth-child(even) div:nth-child(2) {
    margin-right: 13vw;
  }

  .row_fluid:nth-child(odd) div:nth-child(1) p {
    margin-right: 13vw;
  }
}
</style>
