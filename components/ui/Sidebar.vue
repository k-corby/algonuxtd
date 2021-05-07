<template>
  <section>
  <b-sidebar
      id="sidebar-backdrop"
      title=""
      :backdrop-variant="variant"
      backdrop
      shadow
      right
      no-header
     width="100vw">
      <div class="center fh">
        <div>
        <b-menu>
          <h2><span class="num">01</span> About</h2>
        <h2><span class="num">02</span> The Process</h2>
        <h2><span class="num">03</span> Our Work</h2>
        <h2><span class="num">04</span> Contact Us</h2>
        </b-menu>
        </div>
      </div>
    </b-sidebar>
  </section>
</template>

<script>
export default {
   
  }
</script>

<style scoped>
.num{
  font-size:4vw;
  font-family: 'Poppins',Georgia, 'Times New Roman', Times, serif;
  font-weight: 900;
  letter-spacing: 0;
  color:#222;
  margin-left:-7vw;
  margin-top:0vw;
}
.center{
  background-color:#fde637;
  color:#000000;
  padding-top:10vw;
  padding-bottom:10vw;
  min-height: 200vh;
}

.center div{
  margin-left:20vw;
}

.center h2{
  color:rgb(255, 255, 255);
  margin-left:2vw;
  letter-spacing: -0.5vw;
  font-weight: 900;
  font-size: 10vw;
  font-family: 'Libre Baskerville',Verdana, Geneva, Tahoma, sans-serif;
}
</style>
