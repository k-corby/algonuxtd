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
  top: 2vw;
  left: 1.7vw;
  mix-blend-mode: difference;

  a {
    font-size: max(40px, 2.4vw);
    font-weight: 600;
    display: block;
    text-transform: lowercase;
    background-color: var(--black);
    font-family: "Libre Baskerville", "hero-new", sans-serif, Georgia, 'Times New Roman', Times, serif, 'Times New Roman', Times, serif;
    color: rgb(241, 236, 236); 
    text-align: right;
    :hover {
      text-decoration: none;
    }

    .line-through{
      text-decoration: line-through;
      text-decoration-color: yellow;
      text-decoration-thickness: 3px;
    }
  }
}
</style>

<script lang="ts"></script>
