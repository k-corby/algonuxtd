<template>
  <b-sidebar
    id="sidebar-right"
    title="Sidebar"
    right
    shadow
    no-header
    width="100%"
    style="background-color:transparent;"
  >
    <div class="container-fluid fh pl pr">
      <Social />
      <MenuItems />
      <TopCopyright />
    </div>
  </b-sidebar>
</template>

<style lang="scss" scoped>
div.container-fluid {
  background-color: var(--fluro-yellow);
  color: #000000;
  padding-top: max(200px, 14vw);
  padding-bottom: 10vw;
  overflow-y: scroll;
}
</style>
