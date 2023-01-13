import { products, setProducts } from "../data.js";
import { printProducts } from "./listProducts.js";

export function printCart() {

    const listProducts = document.querySelector(".products__list");
    const cartInfo = document.querySelector(".cart__price");
    const cartAmountIcon = document.querySelector(".navbar__amount");
    const cartItems = document.querySelector(".cart__items");
    const cartButton = document.querySelector(".cart__button");

    let objCart = JSON.parse(localStorage.getItem("objCart")) || {};

    function printAmountIconCart() {
        let sum = 0;

        const arrayCart = Object.values(objCart);

        if (!arrayCart.length) {
            cartAmountIcon.textContent = 0;
        }

        arrayCart.forEach(function ({ amount }) {
            sum += amount;
        });

        cartAmountIcon.textContent = sum;
    }

    function printTotalCart() {
        const arrayCart = Object.values(objCart);
        console.log(arrayCart)
        if (!arrayCart.length) {
            cartInfo.innerHTML = `
                <span>0 items</span><h2>$0.00</h2>   
            `;
            return;
        }

        let sum = 0;
        let cant = 0;

        arrayCart.forEach(function ({ amount, price }) {
            cant += amount;
            sum += amount * price;
        });

        cartInfo.innerHTML = `
                <span>${cant} items</span><h2>$${sum}</h2>   
            `;
    }

    function deleteProduct(id) {
        swal({
            title: "Espera",
            text: "Seguro que quieres eliminar producto?",
            icon: "warning",
            buttons: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    delete objCart[id];
                    printProductsInCart();
                    printTotalCart();
                    printAmountIconCart();
                }
            });
    }

    function verifyAddToCart(findProduct, id) {
        if (findProduct.quantity === objCart[id].amount) {
            return swal({
                title: "Error",
                text: "No tengo suficiente",
                icon: "error",
                button: "ok",
            });
        } else {
            objCart[id].amount++;
        }
    }

    function searchProduct(id) {
        return products.find(function (product) {
            return product.id === id;
        });
    }

    function printProductsInCart() {
        let html = "";

        const arrayCart = Object.values(objCart);

        if (arrayCart.length !== 0) {

            cartButton.removeAttribute('disabled');

            arrayCart.forEach(function ({ id, name, price, quantity, image, amount }) {
                html += `
                <div class="cart__product">
                <div class="cart__img">
                    <img src="${image}" alt="${name}" />
                </div>
                <div class="cart__text">
                    <div class="cart__detail">
                        <h3>${name}</h3>
                        <p>Stock: ${quantity} | <span>$${price}</span></p>
                        <span>Subtotal: $${amount * price}</span>
                    </div>

                    <div class="cart__edit" id="${id}">
                        <div class="cart__units">
                            <i class='bx bx-minus'></i>
                            <span>${amount} units</span>
                            <i class='bx bx-plus'></i>
                        </div>
                        <i class='cart__del bx bx-trash-alt'></i>
                    </div>
                </div>
            </div>
                `;
            });
        } else {
            cartButton.setAttribute('disabled', "true");
            html = `<div class="cart__empty">
                        <img src="./src/img/empty-cart.png" alt="empty-cart">
                    </div>
                    <div class="cart__messagge">
                        <h1>Your cart is empty</h1>
                        <p>You can add items to your cart by clicking on the "" button on the product page.</p>
                    </div>`
        }

        cartItems.innerHTML = html;
    }

    cartItems.addEventListener("click", function (e) {
        if (e.target.classList.contains("bx-minus")) {
            const id = e.target.parentElement.parentElement.id;

            if (objCart[id].amount === 1) {
                deleteProduct(id);
            } else {
                objCart[id].amount--;
            }
        }

        if (e.target.classList.contains("bx-plus")) {
            const id = e.target.parentElement.parentElement.id;
            let findProduct = searchProduct(parseFloat(id));
            verifyAddToCart(findProduct, id);
        }

        if (e.target.classList.contains("cart__del")) {
            const id = e.target.parentElement.id;
            deleteProduct(id);
        }

        localStorage.setItem("objCart", JSON.stringify(objCart));

        printProductsInCart();
        printTotalCart();
        printAmountIconCart();
    });

    listProducts.addEventListener("click", function (e) {
        if (e.target.classList.contains("products__add")) {

            let id = e.target.parentElement.id;

            let findProduct = searchProduct(parseFloat(id));

            if (findProduct.quantity === 0) {
                return swal({
                    title: "Error",
                    text: "No tengo suficiente",
                    icon: "error",
                    button: "ok",
                });
            }

            if (objCart[id]) {
                verifyAddToCart(findProduct, id);
            } else {
                objCart[id] = {
                    ...findProduct,
                    amount: 1,
                };
            }

            localStorage.setItem("objCart", JSON.stringify(objCart));
        }

        printProductsInCart();
        printTotalCart();
        printAmountIconCart();
    });


    cartButton.addEventListener("click", function (e) {

        swal({
            title: "Espera",
            text: "Seguro que quieres comprar",
            icon: "info",
            buttons: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    let newArray = [];

                    products.forEach(function (product) {
                        if (product.id === objCart[product.id]?.id) {
                            newArray.push({
                                ...product,
                                quantity: product.quantity - objCart[product.id].amount,
                            });
                        } else {
                            newArray.push(product);
                        }
                    });

                    setProducts(newArray);
                    console.log(newArray);
                    objCart = {};

                    localStorage.setItem("objCart", JSON.stringify(objCart));
                    printProducts();
                    printProductsInCart();
                    printTotalCart();
                    printAmountIconCart();
                };
            });
    });

    printProductsInCart();
    printTotalCart();
    printAmountIconCart();

}