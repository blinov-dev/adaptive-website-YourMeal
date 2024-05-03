import { changeModalProductQuantity } from "./product-quantity.js";

import { productAddToBasket } from "./adding-item-to-basket.js";

const modalWrapper = document.querySelector(".modal-wrapper");
const modalCloseButton = document.querySelector(".product-modal__close-button");
const modalProductButton = document.querySelector(".product-modal__button");
const body = document.body;

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

  function getIngredientList() {
    const productIngredientsList = selectedProduct.querySelectorAll(
      ".composition-product__item"
    );
    const modalProductIngredientsList = modalWrapper.querySelector(
      ".composition-product__list"
    );
    modalProductIngredientsList.innerHTML = "";
    productIngredientsList.forEach(function (ingredient) {
      const modalIngredient = ingredient.cloneNode(true);
      modalProductIngredientsList.appendChild(modalIngredient);
    });
  }
  getIngredientList();

  modalWrapper.querySelector(".composition-product__weight").textContent =
    selectedProduct.querySelector(".product__weight").textContent;

  modalWrapper.querySelector(".product-modal__price").textContent =
    selectedProduct.querySelector(".product__price").textContent;

  const modalProductPrice = modalWrapper.querySelector(".product-modal__price");


  modalProductButton.addEventListener("click", productAddToBasket);

  changeModalProductQuantity(modalProductPrice);
}

function modalClose() {
  body.classList.remove("modal-open");
  modalWrapper.classList.remove("product-modal--open");
  modalCloseButton.removeEventListener("click", modalClose);
}

function addModalOpenEventToProductButton() {
  const productButton = document.querySelectorAll(".product__button");
  productButton.forEach(function (item) {
    item.addEventListener("click", modalOpen);
  });
}

export { modalClose, addModalOpenEventToProductButton };
