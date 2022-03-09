<template>
  <div>
    <div id="logo">
      <NuxtLink to="/"><span class="line-through">a</span>.</NuxtLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#logo {
  position: fixed;
  z-index: 2000;
  mix-blend-mode: difference;
  left:0%;
  top:0%;
  a {
    font-size: 44px;
    font-weight: 600;
    display: block;
    text-transform: lowercase;
    font-family: "Libre Baskerville", "hero-new", sans-serif, Georgia, 'Times New Roman', Times, serif, 'Times New Roman', Times, serif;
    color: #000; 
    text-align: right;
    background-color:#F9F9F9;
    padding:28px 40px 36px 46px;
    /*padding:30px 42px 38px 48px;*/
    :hover {
      text-decoration: none;
    }

    
  }
}
</style>

<script lang="ts"></script>
