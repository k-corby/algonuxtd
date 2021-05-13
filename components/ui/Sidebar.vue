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
