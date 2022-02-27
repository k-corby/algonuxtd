<template>
  <section>
    <Logo2 />
    <Menu />
    <div
      style=" mix-blend-mode:difference; writing-mode: vertical-rl;
    text-orientation: mixed; color:white; letter-spacing:2px; padding-bottom:10px; width:0px; background:linear-gradient(to bottom, #CCC, 30%, #999 30% 100%); height:3vw; position:fixed; bottom:1vw; left:50px; z-index:200; font-weight:600;"
    ></div>

    <div
      style="width:0px; background-color:#555; height:100vh; position:fixed; bottom:0vw; left:5vw; opacity:1; z-index:200;"
    ></div>

    <div
      class="fixed-item"
      style="top:1.5vw; right:2vw; z-index:200;"
    >
      Contact
    </div>

    <div
      class="fixed-item"
      style="bottom:1.5vw; right:2vw; z-index:200;"
    >
      Studio
    </div>
  </section>
</template>
<style lang="scss" scoped>
.fixed-item {
  text-transform: uppercase;
  font-weight: 600;
  font-family: "poppins", "Libre Baskerville", "Poppins", Arial, Helvetica, sans-serif, Tiro Bangla, Georgia,
    "Times New Roman", Times, serif;
    letter-spacing: max(1px, 0.4vw);
    font-size: max(14px, 0.8vw);
    mix-blend-mode:difference; 
    color:#fff;
    position:fixed;
}
</style>
