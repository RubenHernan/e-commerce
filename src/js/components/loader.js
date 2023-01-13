
const load = document.querySelector(".loader");

export function loader() {
    setTimeout(() => {
        load.style.display = 'none'
    }, 2000)

}
