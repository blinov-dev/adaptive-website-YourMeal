import { modalClose } from "./product-modal.js";
import { changeBasketProductQuantity } from "./product-quantity.js";
import { calcProductInBasketPrice } from "./basket.js";

// function calcProductInBasketPrice() {
//   const basketProducts = document.querySelectorAll(".basket__item");
//   const basketResult = document.querySelector(".basket-result__value");

//   let totalPrice = 0;

//   basketProducts.forEach((basketProduct) => {
//     const productCounter = basketProduct.querySelector(
//       ".thumbnails-product__quantity"
//     ).textContent;
//     const productPrice = basketProduct.querySelector(
//       ".thumbnails-product__price"
//     ).textContent;
//     const productPriceInt = productPrice.slice(0, productPrice.length - 1);

//     const productInBasketPrice = productCounter * productPriceInt;
//     totalPrice += productInBasketPrice;
//   });
//   basketResult.textContent = totalPrice + `₽`;
// }

function productAddToBasket() {
  const modalWrapper = document.querySelector(".modal-wrapper");
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

  basketProduct.querySelector(".thumbnails-product__title").textContent =
    modalWrapper.querySelector(".product-modal__title").textContent;

  basketProduct.querySelector(".thumbnails-product__weight").textContent =
    modalWrapper.querySelector(".composition-product__weight").textContent;

  basketProduct.querySelector(".thumbnails-product__price").textContent =
    modalWrapper.querySelector(".product-modal__price").textContent;

  basketProduct.querySelector(".product-quantity").textContent =
    modalWrapper.querySelector(".product-quantity").textContent;

  basketFragment.appendChild(basketProduct);
  basketProductsList.appendChild(basketFragment);

  const basketProductId = basketProduct.querySelector(".thumbnails-product")
    .dataset.basketProductId;

  basketProduct.querySelector(
    ".product-input-price"
  ).id = `basket-product-price-${basketProductId}`;

  basketProduct.querySelector(
    ".product-input-counter"
  ).id = `basket-product-counter-${basketProductId}`;

  basketProduct.querySelector(
    ".product-input-name"
  ).id = `basket-product-name-${basketProductId}`;

  const productInBasket = document.querySelector(
    '.product[data-product-id="' + basketProductId + '"]'
  );
  const productInBasketButton =
    productInBasket.querySelector(".product__button");

  productInBasketButton.setAttribute("disabled", "disabled");
  productInBasketButton.textContent = `В корзине`;
  productInBasketButton.style.backgroundColor = "rgba(248, 99, 16, 1)";

  const productValue = basketProduct.querySelector(
    ".thumbnails-product__price"
  ).textContent;
  const productInputValue = productValue.slice(0, -1);
  basketProduct.querySelector(".product-input-price").value = productInputValue;

  modalClose();
  basketProductQuantity(productInBasketButton);

  calcProductInBasketPrice();
}

function basketProductQuantity(productInBasketButton) {
  const basketProductsList = document.querySelectorAll(".basket__item");

  basketProductsList.forEach((basketProduct) => {
    let newValue = basketProduct.querySelector(".product-quantity").textContent;

    changeBasketProductQuantity(newValue, basketProduct, productInBasketButton);
  });
}

export { productAddToBasket, calcProductInBasketPrice };
