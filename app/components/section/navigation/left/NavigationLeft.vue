<template>
  <section>
    <Logo />
    <Menu />
    <div
      style="width:0px; background-color:#111; height:6vw; position:fixed; bottom:1vw; left:50px; z-index:200;"
    ></div>

    <div
      style="width:0.3px; background-color:black; height:100vh; position:fixed; bottom:0vw; left:100px; opacity:0; z-index:200;"
    ></div>

    <div
      class="fixed-item"
      style="mix-blend-mode:difference; font-size:max(15px, 1.1vw); color:#fff;position:fixed; top:1.5vw; right:2vw; z-index:200;"
    >
      Menu
    </div>

    <div
      class="fixed-item"
      style="mix-blend-mode:difference; font-size:max(15px, 1.1vw); color:#fff;position:fixed; bottom:1.5vw; right:2vw; z-index:200;"
    >
      Studio
    </div>
  </section>
</template>
<style lang="scss" scoped>
.fixed-item {
  text-transform: uppercase;
  font-weight: 600;
  font-family: "poppins", "Libre Baskerville", "Poppins", Tiro Bangla, Georgia,
    "Times New Roman", Times, serif;
}
</style>
