<template>
  <section class="c-section container-fluid">
    <div
      v-for="item in data.items"
      :key="item.id"
      class="bg-white row_fluid fs mb-15 mt-10"
      style="position:relative;"
      data-scroll
    >
      <div class="ml mr">
        <p class="num">0{{ item.id }}</p>
        <h2>{{ item.section }}</h2>

        <p class="info">
          {{ item.text }}
        </p>
      </div>
      <div class="ml mr" style="background-color:transparent; ">
        <img
          class="scale-crop"
          :src="require('../../assets/img/uploads/' + item.img)"
          style="mix-blend-mode:normal; opacity:0.6;"
        />
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
.mt-10 {
  margin-top: 10vw;
}

.ml {
  margin-left: 13vw;
}

.mr {
  margin-right: 13vw;
}
.mb-15 {
  margin-bottom: 15vw;
}
.fs {
  height: 90vh;
}
.scale-crop {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.row_fluid {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  z-index: 2;
}
.row_fluid:nth-child(even) {
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
}

.row_fluid:nth-child(even) div:nth-child(2) {
  width: 120%;
}

.row_fluid:nth-child(even) div:nth-child(1) h2,
.row_fluid:nth-child(even) div:nth-child(1) p.num {
  margin-left: -15vw;
  top: 100;
}

.row_fluid:nth-child(even) div:nth-child(1) {
  margin-left: 6vw;
}

.row_fluid:nth-child(odd) div:nth-child(2) {
  margin-left: 6vw;
}

.row_fluid:nth-child(odd) div:nth-child(1) {
  margin-right: 0;
}

.row_fluid:nth-child(even) div:nth-child(2) {
  margin-left: 10vw;
  margin-right: 0;
}

p.info {
  margin: 32vw 0 5vw 1vw;
  font-size: max(20px, 1.5vw);
  line-height: max(33px, 2.7vw);
  font-weight: 300;
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
  font-size: 3vw;
  font-family: "Poppins", Georgia, "Times New Roman", Times, serif;
  font-weight: 900;
  color: rgb(221, 221, 221);
  position: absolute;
  top: 0;
  margin-top: 7vw;
  margin-left: -3vw;
}

h4 {
  font-size: 3vw;
  font-family: "Libre Baskerville", Georgia, "Times New Roman", Times, serif;
  font-weight: 100;
  letter-spacing: 0px;
}

h2 {
  font-size: 18.5vw;
  position: absolute;
  font-family: "", "Libre Baskerville", Georgia, "Times New Roman", Times, serif;
  font-weight: 900;
  mix-blend-mode: difference;
  letter-spacing: -1vw;
  color: #fff;
  top: 5vw;
  text-decoration: underline;
  text-decoration-style: double;
  text-underline-offset: 10px;
  text-decoration-thickness: 2vw;
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
