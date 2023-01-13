export function navScroll() {
  const nav = document.querySelector(".navbar")
  const aux = document.querySelector(".navbar__darkmode")
  const aux2 = document.querySelector(".navbar__cart")
  const aux3 = document.querySelector(".navbar__toogle")

  if (nav) {
    window.addEventListener('scroll', function () {
      if (window.scrollY >= nav.clientHeight) {
        aux.classList.add('navbar__darkmode--y');
        aux2.classList.add('navbar__darkmode--y');
        aux3.classList.add('navbar__darkmode--y');

        nav.classList.add('navbar--toggle')
      } else {
        nav.classList.remove('navbar--toggle')
        aux.classList.remove('navbar__darkmode--y');
        aux2.classList.remove('navbar__darkmode--y');
        aux3.classList.remove('navbar__darkmode--y');
      }
    })
  }
}
