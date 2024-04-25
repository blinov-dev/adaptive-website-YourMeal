import {
  productQuantityDefault,
  productControlActive,
} from "./product-quantity.js";

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

  productControlActive();
}

function modalClose() {
  productQuantityDefault();
  body.classList.remove("modal-open");
  modalWrapper.classList.remove("product-modal--open");
  modalCloseButton.removeEventListener("click", modalClose);
}

productButton.forEach(function (item) {
  item.addEventListener("click", modalOpen);
});

//
//Добавление товара в корзину

function productAddToBasket() {
  const basketProductsList = document.querySelector(".basket__list");
  const basketTemplateFragment =
    document.querySelector("#basket-product").content;
  const basketTemplate = basketTemplateFragment.querySelector(".basket__item");

  const basketFragment = document.createDocumentFragment();
  const basketProduct = basketTemplate.cloneNode(true);

  basketProduct.querySelector(".thumbnails-product").dataset.basketProductId =
    modalWrapper.querySelector(".product-modal").dataset.modalProductId;

  basketProduct.querySelector(".thumbnails-product__img").children[0].src =
    modalWrapper.querySelector(".product-modal__img").children[0].src;

  // basketProduct.querySelector(".product-quantity").textContent =
  //   modalWrapper.querySelector(".product-quantity").textContent;

  // basketProduct.querySelector(".product-input-counter").value =
  //   modalWrapper.querySelector(".product-input-counter").value;

  // product-modal__quantity

  // modalWrapper.querySelector(".product-modal__img").children[0].alt =
  //   selectedProduct.querySelector(".product__title").textContent;

  // modalWrapper.querySelector(".product-modal__title").textContent =
  //   selectedProduct.querySelector(".product__title").textContent;
  // modalWrapper.querySelector(".product-modal__description").textContent =
  //   selectedProduct.querySelector(".product__description").textContent;
  // if (
  //   basketProduct.querySelector(".thumbnails-product").dataset
  //     .basketProductId ===
  //   modalWrapper.querySelector(".product-modal").dataset.modalProductId
  // ) {
  // }

  basketFragment.appendChild(basketProduct);

  basketProductsList.appendChild(basketFragment);
  modalClose();
  productControlActive();
}

modalProductButton.addEventListener("click", productAddToBasket);

// Закончил здесь

// const basketProductsList = document.querySelector(".basket__list");
// const basketProductsItem = document.querySelector(".basket__item");
// if (basketProductsList.contains(basketProductsItem)) {
//   console.log(123);

// }
