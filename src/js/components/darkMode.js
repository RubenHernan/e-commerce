export function darkMode() {
    const icon = document.querySelector(".navbar__darkmode");

    icon.addEventListener("click", () => {
        document.body.classList.toggle("darkMode");
        icon.firstElementChild.classList.toggle("bx-sun");
    })

}