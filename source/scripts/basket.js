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
//basket__type-delivery--select

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

/* ЗАДАЧИ и ВОПРОСЫ
1) Суммировать стоимость в модалке при + - количестве товаров
2) В корзине проверить изменение количества товаров не должно удаляться на 1
3) Настроить суммирвоание общей стоимости корзины
4) Общий счетчик на общее кол-во товаров
5) После нажатия на кнопку другого фильтра, сбрасываются стили уже добавленных товаров
*/
