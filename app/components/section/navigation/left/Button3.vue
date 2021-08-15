<template>
  <section>
    <input class="menu-icon" type="checkbox" id="menu-icon" name="menu-icon" />
    <label
      style="mix-blend-mode:difference; z-index:1000; position:fixed; top:50%; left:2vw"
      for="menu-icon"
    ></label>
    <nav class="nav">
      <ul class="pt-5">
        <li><a href="#">Work</a></li>
        <li><a href="#">Studio</a></li>
        <li><a href="#">News</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  </section>
</template>
<style lang="scss" scoped>
[type="checkbox"]:checked,
[type="checkbox"]:not(:checked) {
  position: absolute;
  left: -9999px;
}
.menu-icon:checked + label,
.menu-icon:not(:checked) + label {
  position: absolute;
  top: 2vw;
  right: 30px;
  display: block;
  width: 30px;
  height: 30px;
  padding: 0;
  margin: 0;
  cursor: pointer;
  z-index: 200;
}
.menu-icon:checked + label:before,
.menu-icon:not(:checked) + label:before {
  position: absolute;
  content: "";
  display: block;
  width: 40px;
  height: 20px;
  z-index: 20;
  top: 0;
  left: 0;
  border-top: 2px solid #ffffff;
  border-bottom: 2px solid #ffffff;
}
.menu-icon:checked + label:after,
.menu-icon:not(:checked) + label:after {
  position: absolute;
  content: "";
  display: block;
  width: 40px;
  height: 2px;
  border-bottom: 2px solid #ffffff;
  z-index: 20;
  top: 10px;
  left: 0px;
  margin-top: -1px;
}

.menu-icon:checked + label:after {
  background-color: #ececee;
}
.menu-icon:checked + label:before {
  top: 7px;
  transform: rotate(45deg);
  height: 2px;
  background-color: #ececee;
  border-width: 0;
  transition: background-color 200ms 500ms ease,
    transform 200ms 1700ms cubic-bezier(0.23, 1, 0.32, 1);
}
.menu-icon:checked + label:after {
  width: 40px;
  margin-top: 0;
  right: 0;
  transform: rotate(-45deg);
  transition: transform 200ms 1700ms cubic-bezier(0.23, 1, 0.32, 1);
}

.nav {
  position: fixed;
  top: 33px;
  right: 50px;
  display: block;
  width: 80px;
  height: 80px;
  padding: 0;
  margin: 0;
  z-index: 9;
  overflow: hidden;
}

.menu-icon:checked ~ .nav {
  animation-play-state: paused;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  width: 200%;
  height: 200%;
  background-color: red;
  transition: top 350ms 700ms cubic-bezier(0.23, 1, 0.32, 1),
    right 350ms 700ms cubic-bezier(0.23, 1, 0.32, 1), transform 250ms 700ms ease,
    width 750ms 1000ms cubic-bezier(0.23, 1, 0.32, 1),
    height 750ms 1000ms cubic-bezier(0.23, 1, 0.32, 1);
}

.nav ul {
  position: absolute;
  top: 50%;
  left: 0;
  display: block;
  width: 100%;
  padding: 0;
  margin: 0;
  z-index: 6;
  text-align: center;
  transform: translateY(-50%);
  list-style: none;
}
.nav ul li {
  position: relative;
  display: block;
  width: 100%;
  padding: 0;
  margin: 10px 0;
  text-align: center;
  list-style: none;
  pointer-events: none;
  opacity: 0;
  visibility: hidden;
  transform: translateY(30px);
  transition: all 0ms linear;
}
/*
.nav ul li:nth-child(1) {
  transition-delay: 200ms;
}
.nav ul li:nth-child(2) {
  transition-delay: 150ms;
}
.nav ul li:nth-child(3) {
  transition-delay: 100ms;
}
.nav ul li:nth-child(4) {
  transition-delay: 50ms;
}*/
.nav ul li a {
  font-family: "Montserrat", sans-serif;
  font-size: 9vh;
  text-transform: uppercase;
  line-height: 1.2;
  font-weight: 800;
  display: inline-block;
  position: relative;
  color: #ececee;
  transition: all 250ms linear;
}
.nav ul li a:hover {
  text-decoration: none;
  color: #ffeba7;
}
.nav ul li a:after {
  display: block;
  position: absolute;
  top: 50%;
  content: "";
  height: 2vh;
  margin-top: -1vh;
  width: 0;
  left: 0;
  background-color: #353746;
  opacity: 0.8;
  transition: width 250ms linear;
}
.nav ul li a:hover:after {
  width: 100%;
}

.menu-icon:checked ~ .nav ul li {
  pointer-events: auto;
  visibility: visible;
  opacity: 1;
  transform: translateY(0);
  transition: opacity 350ms ease, transform 250ms ease;
}
.menu-icon:checked ~ .nav ul li:nth-child(1) {
  transition-delay: 1400ms;
}
.menu-icon:checked ~ .nav ul li:nth-child(2) {
  transition-delay: 1480ms;
}
.menu-icon:checked ~ .nav ul li:nth-child(3) {
  transition-delay: 1560ms;
}
.menu-icon:checked ~ .nav ul li:nth-child(4) {
  transition-delay: 1640ms;
}

.logo {
  position: absolute;
  top: 60px;
  left: 50px;
  display: block;
  z-index: 11;
  transition: all 250ms linear;
}
.logo img {
  height: 26px;
  width: auto;
  display: block;
}

@media screen and (max-width: 991px) {
  .menu-icon:checked + label,
  .menu-icon:not(:checked) + label {
    right: 55px;
  }
  .logo {
    left: 30px;
  }
  .nav {
    right: 30px;
  }
  h1 {
    font-size: 9vw;
    -webkit-text-stroke: 2px transparent;
    text-stroke: 2px transparent;
    -webkit-text-fill-color: #ffeba7;
    text-fill-color: #ffeba7;
    color: #ffeba7;
  }
  .nav ul li a {
    font-size: 8vh;
  }
}
</style>
