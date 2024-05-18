import { calcBasketInfo } from "./basket-form.js";

const basketForm = document.querySelector("#order-form");


function mobileBasket() {
  const screenWidth = window.screen.width;
  const SCREEN_WIDTH_DESKTOP = 1024;
  if (screenWidth < SCREEN_WIDTH_DESKTOP) {
    basketForm.addEventListener("click", function () {
      basketForm.classList.toggle("basket__mobile--open");
    });
  }
}
mobileBasket();

function clearBasket() {
  const basket = document.querySelector(".basket");
  const basketProducts = document.querySelectorAll(".basket__item");
  if (basketProducts.length === 0) {
    basket.classList.add("basket--clear");
  } else {
    basket.classList.remove("basket--clear");
  }
}
clearBasket();

function basketTypeDelivery(totalPrice, basketProducts) {
  const basketTypeDelivery = document.querySelector(".basket__type-delivery");
  if (totalPrice >= 1000 && basketProducts.length > 0) {
    basketTypeDelivery.textContent = "Бесплатная доставка";
  } else {
    basketTypeDelivery.textContent = "Платная доставка 250₽";
  }
}

function calcProductInBasketPrice() {
  const basketProducts = document.querySelectorAll(".basket__item");
  const basketResult = document.querySelector(".basket-result__value");
  let basketResultInput = document.querySelector("#basket-result-input").value;

  let totalPrice = 0;

  basketProducts.forEach((basketProduct) => {
    const productCounter = basketProduct.querySelector(
      ".thumbnails-product__quantity"
    ).textContent;
    const productPrice = basketProduct.querySelector(
      ".thumbnails-product__price"
    ).textContent;
    const productPriceInt = productPrice.slice(0, productPrice.length - 1);

    const productInBasketPrice = productCounter * productPriceInt;
    let productSumValueInput =
      document.querySelector(".product-sum-value").value;
    productSumValueInput += productInBasketPrice;

    totalPrice += productInBasketPrice;
  });
  basketResult.textContent = totalPrice + `₽`;
  basketResultInput = basketResult.textContent;
  clearBasket();
  calcBasketCounter();
  basketTypeDelivery(totalPrice, basketProducts);
  calcBasketInfo(basketResultInput);
}

function calcBasketCounter() {
  const basketCounter = document.querySelector(".basket-header__counter");
  const basketProductsQuantity = document.querySelectorAll(
    ".thumbnails-product__quantity"
  );

  let totalQuantity = 0;

  basketProductsQuantity.forEach((productsQuantity) => {
    totalQuantity += parseInt(productsQuantity.textContent);
  });
  basketCounter.textContent = totalQuantity;
}

export { calcProductInBasketPrice };
