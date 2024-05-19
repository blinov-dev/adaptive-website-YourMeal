const basket = document.querySelector(".basket");
const basketResultValue = document.querySelector("#basket-result-value");

function mobileBasket() {
  const screenWidth = window.screen.width;
  const SCREEN_WIDTH_DESKTOP = 1024;
  if (screenWidth < SCREEN_WIDTH_DESKTOP) {
    basket.addEventListener("click", function () {
      basket.classList.toggle("basket__mobile--open");
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
  const basketDelivery = document.querySelector(".basket__type-delivery");
  if (totalPrice >= 1000 && basketProducts.length > 0) {
    basketDelivery.textContent = "Бесплатная доставка";
  } else {
    basketDelivery.textContent = "Платная доставка 250₽";
  }
}

function calcBasketInfo(basketResult) {
  const basketProducts = document.querySelectorAll(".basket__item");

  const productsTotalValue = [];
  const products = [];
  let product = {
    name: "",
    counter: 0,
    price: 0,
  };

  basketProducts.forEach((basketProduct) => {
    const productName = basketProduct.querySelector(
      ".thumbnails-product__title"
    ).textContent;

    const productCounter =
      basketProduct.querySelector(".product-quantity").textContent;

    const productPrice = basketProduct.querySelector(
      ".thumbnails-product__price"
    ).textContent;

    product = {
      name: productName,
      counter: productCounter,
      price: productPrice,
    };
    products.push(product);
  });

  productsTotalValue.push(basketResult.textContent);

  const result = JSON.stringify(products);
  basketResultValue.textContent = result;

  return basketResultValue;
}

function calcProductInBasketPrice() {
  const basketProducts = document.querySelectorAll(".basket__item");
  const basketResult = document.querySelector(".basket-result__value");

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

    totalPrice += productInBasketPrice;
  });
  basketResult.textContent = totalPrice + `₽`;
  clearBasket();
  calcBasketCounter();
  basketTypeDelivery(totalPrice, basketProducts);
  calcBasketInfo(basketResult);
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
