import { changeProductQuantity } from "./product-quantity.js";

import { productAddToBasket } from "./adding-item-to-basket.js";

const modalWrapper = document.querySelector(".modal-wrapper");
const modalCloseButton = document.querySelector(".product-modal__close-button");
const modalProductButton = document.querySelector(".product-modal__button");
const body = document.body;

const productButton = document.querySelectorAll(".product__button");

function modalOpen() {
  modalWrapper.classList.add("product-modal--open");
  body.classList.add("modal-open");
  modalCloseButton.addEventListener("click", modalClose);
  const selectedProduct = this.parentNode;
  const selectedProductId = selectedProduct.dataset.productId;

  modalWrapper.querySelector(".product-modal").dataset.modalProductId =
    selectedProductId;

  modalWrapper.querySelector(".product-modal__img").children[0].src =
    selectedProduct.querySelector(".product__img").children[0].src;
  modalWrapper.querySelector(".product-modal__img").children[0].alt =
    selectedProduct.querySelector(".product__title").textContent;
  modalWrapper.querySelector(".product-modal__title").textContent =
    selectedProduct.querySelector(".product__title").textContent;
  modalWrapper.querySelector(".product-modal__description").textContent =
    selectedProduct.querySelector(".product__description").textContent;

  const productIngredientsList = selectedProduct.querySelectorAll(
    ".composition-product__item"
  );
  for (let i = 0; i < productIngredientsList.length; i++) {
    const modalProductIngredientsList = modalWrapper.querySelector(
      ".composition-product__list"
    );
    let ingredient = productIngredientsList[i];
    ingredient.classList.add("product__composition-item");
    ingredient.classList.add("composition-product__item");
    modalProductIngredientsList.appendChild(ingredient);
  }
  modalWrapper.querySelector(".composition-product__weight").textContent =
    selectedProduct.querySelector(".product__weight").textContent;
  modalWrapper.querySelector(".product-modal__price").textContent =
    selectedProduct.querySelector(".product__price").textContent;

  changeProductQuantity();
}

function modalClose() {
  body.classList.remove("modal-open");
  modalWrapper.classList.remove("product-modal--open");
  modalCloseButton.removeEventListener("click", modalClose);
}

productButton.forEach(function (item) {
  item.addEventListener("click", modalOpen);
});

//
//Добавление товара в корзину

modalProductButton.addEventListener("click", productAddToBasket);

export { modalClose };
