<template>
  <section>
    <input class="menu-icon" type="checkbox" id="menu-icon" name="menu-icon" />
    <label class="menu-button" for="menu-icon"></label>
    <nav class="nav">
      <ul class="pt-5">
        <li><NuxtLink to="/work">Work</NuxtLink></li>
        <li><NuxtLink to="/studio">Studio</NuxtLink></li>
        <li><NuxtLink to="/approach">Approach</NuxtLink></li>
        <li><NuxtLink to="/contact">Contact</NuxtLink></li>
      </ul>
    </nav>
  </section>
</template>
<style lang="scss" scoped>

@media screen and (min-width: 992px) {
  .menu-button {
    left: 2vw;
    top: 48%;
  }
}

@media screen and (max-width: 991px) {
  .menu-button {
    right: 4vw;
    top: 4vw;
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
.menu-button {
  mix-blend-mode: difference;
  z-index: 1000;
  width: 70px;
  height:70px;
  position: fixed;
  display: block;
  cursor: pointer;
}
[type="checkbox"]:checked,
[type="checkbox"]:not(:checked) {
  position: absolute;
  left: -9999px;
}
.menu-icon:checked + label:before,
.menu-icon:not(:checked) + label:before {
  position: absolute;
  content: "";
  display: block;
  width: max(2vw, 30px);
  height: 12px;
  z-index: 20;
  margin-top:20px;
  top: 0;
  left: 0;
  border-top: 2px solid #ffffff;
  border-bottom: 5px solid #ffffff;
  transition: border-width 100ms 500ms ease,
    top 100ms 1600ms cubic-bezier(0.23, 1, 0.32, 1),
    height 100ms 1600ms cubic-bezier(0.23, 1, 0.32, 1),
    background-color 200ms ease, transform 200ms cubic-bezier(0.23, 1, 0.32, 1);
}

.menu-icon:checked + label:after,
.menu-icon:not(:checked) + label:after {
  position: absolute;
  border-bottom: 0px solid #ffffff;
  content: "";
  display: block;
  width: max(2vw, 30px);
  height: 0px;
  z-index: 20;
  top: 8px;
  left: 0;
  margin-top:20px;
  background-color: #ececee;
  transition: width 100ms 1750ms ease, right 100ms 750ms ease,
    margin-top 100ms ease, transform 200ms cubic-bezier(0.23, 1, 0.32, 1);
}
.menu-icon:checked + label:before {
  top: 9px;
  transform: rotate(45deg);
  height: 4px;
  margin-top:20px;
  background-color: #ececee;
  border-width: 0;
  transition: border-width 100ms 340ms ease,
    top 100ms 300ms cubic-bezier(0.23, 1, 0.32, 1),
    height 100ms 300ms cubic-bezier(0.23, 1, 0.32, 1),
    background-color 200ms 500ms ease,
    transform 200ms 1700ms cubic-bezier(0.23, 1, 0.32, 1);
}
.menu-icon:checked + label:after {
  width: max(2vw, 30px);
  margin-top: 20px;
  height: 4px;
  left: 0px;
  transform: rotate(-45deg);
  transition: width 100ms ease, right 100ms ease, margin-top 100ms 500ms ease,
    transform 200ms 1700ms cubic-bezier(0.23, 1, 0.32, 1);
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
  /*animation: border-transform 7s linear infinite;
  transition: top 350ms 1100ms cubic-bezier(0.23, 1, 0.32, 1),
    right 350ms 1100ms cubic-bezier(0.23, 1, 0.32, 1),
    transform 250ms 1100ms ease,
    width 650ms 400ms cubic-bezier(0.23, 1, 0.32, 1),
    height 650ms 400ms cubic-bezier(0.23, 1, 0.32, 1);*/
}

.menu-icon:checked ~ .nav {
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  width: 200%;
  height: 200%;
  background-color: black;  /* rgb(255, 203, 48)  rgb(255, 203, 48);*/
  transition: /*top 350ms 700ms cubic-bezier(0.23, 1, 0.32, 1),
    right 350ms 700ms cubic-bezier(0.23, 1, 0.32, 1), transform 250ms 700ms ease,*/ background-color
      100ms 300ms ease,
    width 0ms 300ms cubic-bezier(0.23, 1, 0.32, 1),
    height 0ms 300ms cubic-bezier(0.23, 1, 0.32, 1);
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
</style>