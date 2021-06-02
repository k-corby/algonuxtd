<template>
  <section>
    <b-button id="nav-btn" v-b-toggle.sidebar-right>
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 455 455"
        style="enable-background:new 0 0 455 455;"
        xml:space="preserve"
        fill="rgb(255, 255, 255, 0.9)"
      >
        <g>
          <rect y="254" width="500" height="12" />
          <rect y="210" width="500" height="12" />
        </g>
      </svg>
    </b-button>
    <b-sidebar
      id="sidebar-right"
      title="Sidebar"
      right
      shadow
      no-header
      width="100%"
      style="background-color:transparent;"
    >
      <div class="center fh pl pr">
        <div id="menu-logo">
          <NuxtLink to="/">algo</NuxtLink>
        </div>
        <Social />
        <div>
          <MenuItems />
        </div>
        <div class="pt pl">
          <hr />
          <p class="slogan">
            Terms & Conditions | Privacy Policy &#169; Algo
          </p>
        </div>
      </div>
    </b-sidebar>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#nav-btn {
  mix-blend-mode: difference;
  position: fixed;
  top: 1%;
  right: 0;
  z-index: 2000;
  margin: 4.5vw 6vw 0 0;
  background: none;
  border: none;
  svg {
    width: 7vw;
    height: 100px;
    @media (max-width: 1000px) {
      width: 80px;
    }
  }
}

#menu-logo {
  position: fixed;
  top: 0vw;
  left: 4vw;
  z-index: 1000;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  height: 150px;
  color: #222;
  display: none;

  a {
    padding: 30px 15px 40px 20px;
    cursor: pointer;
    font-size: 3em;
    font-family: "hero-new", "Martel", sans-serif;
    font-weight: 800;
    letter-spacing: -3px;
    text-transform: lowercase;
    text-decoration: none;
    background-color: #ffffff;
    margin: 0;
  }

  a:hover {
    background-color: #181829;
    color: #fff;
  }
}
.center {
  background-color: rgb(249, 250, 13) /* ffeb51 9fc1e0  #fde637 ffec5b  b7ccbb*/;
  color: #000000;
  padding-top: max(200px, 14vw);
  padding-bottom: 10vw;
  overflow-y: scroll;

  .slogan {
    font-weight: 400;
    font-size: min(20px, 1.8vw);
    letter-spacing: 0.7vw;
    font-family: "Martel", sans-serif;
  }
}
</style>
