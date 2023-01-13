export function menuResponsive() {
  const icon = document.querySelector(".navbar__toogle");
  const menu = document.querySelector(".navbar__list");
  const iconClose = document.querySelector(".navbar__close")
  if (icon && menu && iconClose) {
    icon.addEventListener('click', function () {
      menu.classList.toggle("navbar__list--toggle")
    })
    iconClose.addEventListener('click', function () {
      menu.classList.toggle("navbar__list--toggle")
    })
  }
}


export function cartResponsive() {
  const icon = document.querySelector(".navbar__cart");
  const cart = document.querySelector(".cart");
  const iconClose = document.querySelector(".cart__close")
  if (icon && cart && iconClose) {
    icon.addEventListener('click', function () {
      cart.classList.toggle("cart--toggle")
    })
    iconClose.addEventListener('click', function () {
      cart.classList.toggle("cart--toggle")
    })
  }
}
