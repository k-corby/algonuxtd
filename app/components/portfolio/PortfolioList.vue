<template>
  <div class="container-fluid bg-white" id="services">
    <div
      v-for="item in data.items"
      :key="item.id"
      class="bg-white row_fluid mt_10 mb_15"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <div class="pl pr valign_mid">
        <p class="num">0{{ item.id }}</p>
        <h2>{{ item.section }}</h2>

        <p>
          {{ item.text }}
        </p>
      </div>
      <div class="mr9vw service_img">
        <img
          class="scale-crop blend-mode"
          :src="require('../../assets/img/uploads/' + item.img)"
        />
      </div>
    </div>
  </div>
</template>
<script>
import json from "./data.json";
export default {
  data() {
    return { data: json };
  },
  computed: {
    order: function() {
      return console.log(1);
    }
  }
};
</script>

<style scoped>
.row_fluid:nth-child(even) {
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
}

.row_fluid:nth-child(even) .service_img {
  width: 90%;
}

main #services p {
  margin: 0 0 5vw 0;
  font-size: 180%;
  line-height: 40px;
}

main #services p.num {
  font-size: 3vw;
  font-family: "Poppins", Georgia, "Times New Roman", Times, serif;
  font-weight: 900;
  color: rgb(221, 221, 221);
  position: absolute;
  margin-top: 2.2vw;
  margin-left: -3vw;
}

main #services h4 {
  font-size: 3vw;
  font-family: "Libre Baskerville", Georgia, "Times New Roman", Times, serif;
  font-weight: 100;
  letter-spacing: 0px;
}

main #services h2 {
  font-size: 11.5vw;
  font-family: "Libre Baskerville", Georgia, "Times New Roman", Times, serif;
  font-weight: 900;
  letter-spacing: -0.5vw;
  color: #222;
}

main #services h3 {
  margin: -4vw 0 -1vw 0;
  font-size: 4.5vw;
  color: blue;
}

main #services img {
  margin-left: 0px;
  display: block;
}

@media (max-width: 1000px) {
  main #services .row_fluid:nth-child(even) {
    display: block;
    flex-direction: row-reverse;
    width: 100%;
    grid-template-columns: none;
  }

  main #services .row_fluid:nth-child(even) .service_img {
    width: 100%;
  }

  main #services .mb_15 {
    margin-bottom: 0;
  }
  main #services .mt_10 {
    margin-top: 0;
  }

  main #services .scale-crop {
    height: 40vh;
  }

  main #services p {
    font-size: 135%;
    line-height: 32px;
    letter-spacing: 0.3vw;
  }
}
</style>
