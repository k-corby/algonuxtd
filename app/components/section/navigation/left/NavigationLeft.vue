<template>
  <section>
    <Logo />
    <Menu />
    <div
      style=" mix-blend-mode:difference; writing-mode: vertical-rl;
    text-orientation: mixed; color:white; letter-spacing:0.1vw; padding-bottom:10px; width:0px; background:linear-gradient(to bottom, #CCC, 30%, #999 30% 100%); height:3vw; position:fixed; bottom:1vw; left:50px; z-index:200; font-weight:500;"
    >scroll</div>

   <!-- <div
      style="/*width:110px; background-color:#FFF;*/ border-right:1px solid #222; height:100vh; position:fixed; bottom:0vw; left:0vw; opacity:1; z-index:200;"
    ></div>-->
<div
      style="width:0; height:100vh; position:fixed; bottom:0vw; left:0vw; opacity:1; z-index:200;"
    ></div>
    <div
      class="fixed-item contact"
      style=" z-index:200;"
    >
      <NuxtLink to="/index4">Contact</NuxtLink>
    </div>

    <div
      class="fixed-item"
      style="bottom:1.5vw; right:2vw; z-index:200;"
    >
      <NuxtLink to="/index2">Studio</NuxtLink>
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
@media screen and (min-width:991px){
  .contact{
    top:1.5vw; 
    right:2vw;
  }
}
@media screen and (max-width: 991px) {
  .contact {
    bottom: 1.5vw;
    left: 2vw;
    
  }
}
</style>
