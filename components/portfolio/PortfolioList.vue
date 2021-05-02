<template>
  <div id="services" class="">
    <div v-for="(item) in data.items"
      :key="item.id"
      class="bg-white row_fluid fs mt_10 mb_15">
      
      <div class="pl pr valign_mid">
       <p class="num">
          <!--<a class="btn btn-fixed" href="/home/philosophy">Explore &rarr;</a>-->
          0{{item.id}}
        </p>
       <h2>{{item.section}}</h2>
        
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
//import PortfolioData from "../portfolio/Portfolio.vue";
console.log(json);
export default {
  data() {
    return { data: json };
  },
  computed: {
    order: function () {
      return console.log(1);
    },
    //images() {
    //return require("../../assets/img/research.jpg");
    //},
  },
  //async fetch() {
  //this.data = await this.$content(json.CONTENT).fetch();
  // },
};
</script>

<style scoped>
main #services .row_fluid:nth-child(even){
  display: flex;
  flex-direction: row-reverse;
  width: 100%;

}

main #services .row_fluid:nth-child(even) .service_img{
  width:80%;

}

@media (max-width:1000px){
  main #services .row_fluid:nth-child(even){
    display: block;
    flex-direction: row-reverse;
    width: 100%;
    grid-template-columns: none;
  
  }
}



main #services p{
}

main #services p.num{
    font-size:3vw;
  font-family: 'Poppins',Georgia, 'Times New Roman', Times, serif;
  font-weight: 900;
  color:rgb(221, 221, 221);
  position: absolute;
  margin-top:2.2vw;
  margin-left:-3vw;
}

main #services h4{
  font-size:3vw;
  font-family: 'Libre Baskerville',Georgia, 'Times New Roman', Times, serif;
  font-weight: 100;
  letter-spacing: 0px;
}

main #services h2{
    font-size:8.5vw;
  font-family: 'Libre Baskerville',Georgia, 'Times New Roman', Times, serif;
  font-weight: 100;
  letter-spacing: -0.5vw;
  color:#222;
}



main #services img{
  margin-left:0px;
  display: block;
}
</style>