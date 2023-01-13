import { navScroll } from "./components/navScroll.js";
import { menuResponsive, cartResponsive } from "./components/menuResponsive.js";
import { printProducts } from "./components/listProducts.js";
import { printCart } from "./components/cart.js";
import { darkMode } from "./components/darkMode.js";
import { loader } from "./components/loader.js";

window.addEventListener('load', function () {
  loader();
})

document.addEventListener('DOMContentLoaded', function () {
  darkMode();
  navScroll();
  menuResponsive();
  cartResponsive();
  printProducts();
  printCart();


  mixitup('.products__list', {
    selectors: {
      target: '.products__item'
    },
    animation: {
      duration: 300
    }
  }).filter('all')

})
