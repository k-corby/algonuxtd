<template>
<section>
    <div id="logo">
       <Logo />
    </div>
    <a id="nav" v-b-toggle.sidebar-backdrop>
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        	 viewBox="0 0 455 455" style="enable-background:new 0 0 455 455;" xml:space="preserve" fill="rgb(255, 255, 255, 0.9)">
        <g>
          <rect y="260" width="500" height="17"/>
        	<rect y="210" width="500" height="17"/>

        </g>
        </svg>
      </a> 
        <Sidebar />
</section>
</template>
<script>
</script>

<style scoped>
#logo{
  position:fixed;
  mix-blend-mode: difference;
  z-index: 1000;
}

#nav{
  mix-blend-mode: difference;
  width:100px;
  position:fixed;
  top:0;
  right:0;
  z-index: 2000;
  margin:4vw 6vw 0 0;
}
</style>