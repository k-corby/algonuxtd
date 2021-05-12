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
      width="100vw"
    >
      <div class="center fh">
        <div id="menu_logo">
          <NuxtLink to="/">algo</NuxtLink>
        </div>
        <div id="social">
          <p></p>
        </div>
        <div>
          <b-menu>
            <h2><span class="num">01</span> About</h2>
            <h2><span class="num">02</span> Process</h2>
            <h2><span class="num">03</span> Work</h2>
            <h2><span class="num">04</span> Contact Us</h2>
            <h2><span class="num">04</span> Contact Us</h2>
          </b-menu>
        </div>
      </div>
    </b-sidebar>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#social {
  position: absolute;
  left: 1vw;
  bottom: 1vw;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  text-transform: uppercase;
  padding: 1vw;
  p {
    font-family: "Martel", Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1rem;
    color: rgb(0, 0, 0);
    font-weight: 900;
    letter-spacing: 7px;
    background: url("~/assets/img/2.png") no-repeat 0 0;
    background-size: 55px;
    width: 40px;
    height: 300px;
  }
}
#menu_logo {
  margin: 0vw 0 0 0vw;
  padding: 2vw 1vw;
  position: fixed;
  top: 0vw;
  left: 1vw;
  z-index: 1000;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  background-color: #ffffff;
  height: 150px;
  a {
    cursor: pointer;
    font-size: 3em;
    font-family: "hero-new", "Martel", sans-serif;
    font-weight: 800;
    letter-spacing: -3px;
    color: #222;
    text-transform: lowercase;
    margin: 0;
    padding-left: 1vw;
  }
}
.num {
  font-size: 4vw;
  font-family: "Poppins", Georgia, "Times New Roman", Times, serif;
  font-weight: 900;
  letter-spacing: 0;
  color: #222;
  margin-left: -7vw;
  margin-top: 0vw;
}
.center {
  background-color: #ffeb51 /*  9fc1e0  #fde637 ffec5b  b7ccbb*/;
  color: #000000;
  padding-top: max(200px, 16vw);
  padding-bottom: 10vw;
}

.center {
  padding-left: 20vw;
}

.center h2 {
  color: #fff;
  margin: -3vw 0;
  margin-left: 2vw;
  letter-spacing: -0.5vw;
  font-weight: 900;
  font-size: 13vw;
  font-family: "Libre Baskerville", Verdana, Geneva, Tahoma, sans-serif;
}
</style>
