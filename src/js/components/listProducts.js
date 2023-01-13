import { products } from "../data.js";

export function printProducts() {

    const productsList = document.querySelector(".products__list");
    let htmlrender = "";

    products.forEach(({ id, name, price, image, category, quantity }) => {
        htmlrender += `
                <article class="products__item ${category}">
                    <div class="products__img" id="${id}">
                        <img src="${image}" alt="featured${id}">
                        <button class="products__add">+</button>
                    </div>
                    <div class="products__info">
                        <div class="products__price">
                            <h1>$${price.toFixed(2)}</h1>|<span>Stock: ${quantity}</span>
                        </div>
                        <h2>${name}</h2>
                    </div>
                </article>
        `
    });
    productsList.innerHTML = htmlrender;

}