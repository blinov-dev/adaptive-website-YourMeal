import { modalClose } from "./product-modal.js";
import { changeBasketProductQuantity } from "./product-quantity.js";
import { basket } from "./basket.js";

console.log(basket);

function productPushToBasket(basketProductId) {
  basket.push(basketProductId);
  console.log(basket);
}

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
  modalClose();
  productPushToBasket(basketProductId);
  basketProductQuantity(productInBasketButton);
}

function basketProductQuantity(productInBasketButton) {
  const basketProductsList = document.querySelectorAll(".basket__item");

  basketProductsList.forEach((basketProduct) => {
    let newValue = basketProduct.querySelector(".product-quantity").textContent;

    changeBasketProductQuantity(newValue, basketProduct, productInBasketButton);
  });
}

export { productAddToBasket };
