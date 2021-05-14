<template>
  <section>
    <!--<b-button id="nav-btn" v-b-toggle.sidebar-1>
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
          <rect y="254" width="500" height="14" />
          <rect y="210" width="500" height="14" />
        </g>
      </svg>
    </b-button>
    <b-sidebar id="sidebar-right" title="Sidebar" right shadow>
      <div class="center fh">
        <div id="menu_logo">
          <NuxtLink to="/">algo</NuxtLink>
        </div>
        <Social />
        <div>
          <MenuItems />
        </div>
      </div>
    </b-sidebar>-->
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
          <rect y="254" width="500" height="14" />
          <rect y="210" width="500" height="14" />
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
    >
      <div class="center fh">
        <div id="menu_logo">
          <NuxtLink to="/">algo</NuxtLink>
        </div>
        <Social />
        <div>
          <MenuItems />
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
  margin: 4vw 6vw 0 0;
  background: none;
  border: none;
}

#nav-btn svg {
  width: 240px;
  height: 100px;
}

#siderbar-right {
  width: 100%;
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
.center {
  background-color: #fde637 /* ffeb51 9fc1e0  #fde637 ffec5b  b7ccbb*/;
  color: #000000;
  padding-top: max(200px, 16vw);
  padding-bottom: 10vw;
}

.center {
  padding-left: 20vw;
}
</style>
