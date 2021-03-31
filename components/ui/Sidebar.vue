<template>

<section>
  <b-sidebar
      type="is-light"
      :fullheight="fullheight"
      :fullwidth="fullwidth"
      :overlay="overlay"
      :right="right"
      v-model="open"
    >
      <div class="bg-black fh">
        <!--<b-menu>
          <b-menu-list label="Menu">
            <b-menu-item label="Logout"></b-menu-item>
            <b-menu-item label="Logout"></b-menu-item>
          </b-menu-list>
        </b-menu>-->
        <h1>Menu</h1>
        <h2>01 Approach</h2>
        <h2>02 Work</h2>
        <h2>03 Contact</h2>
      </div>
    </b-sidebar>
    <div id="menu">
    <a @click="open = true">
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        	 viewBox="0 0 455 455" style="enable-background:new 0 0 455 455;" xml:space="preserve" fill="rgb(255, 255, 255, 0.9)">
        <g>
          <!--<rect y="310" width="200" height="13"/>-->
          <rect y="260" width="500" height="17"/>
        	<rect y="210" width="500" height="17"/>

        </g>
        </svg>
    </a>
    </div>
  </section>

</template>

<script>

export default {
      data() {
        return {
          open: false,
          overlay: true,
          fullheight: true,
          fullwidth: true,
          right: true,
        };
      }
    };

</script>
