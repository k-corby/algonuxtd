import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

const install = Vue => {
  Vue.prototype.LocomotiveScroll = LocomotiveScroll;
};

export default install;

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(install);
  if (install.installed) {
    install.installed = false;
  }
}

/*import Vue from "vue";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

/*const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true
});

Vue.use(LocomotiveScroll);

/*Object.defineProperty(Vue.prototype, "LocomotiveScroll", {
  value: LocomotiveScroll
});

this.lmS = new this.LocomotiveScroll({
  el: document.querySelector("#js-scroll"),
  smooth: true
});
console.log("lmS", this.lmS);*/
