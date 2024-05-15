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
}

const basketCounter = document.querySelector(".basket-header__counter");
const basketInputCounter = document.querySelector("#basket-counter-input");
const clearBasketLabel = document.querySelector(".basket__empty");

const basket = [];

basketInputCounter.value = basket.length;
basketCounter.textContent = basketInputCounter.value;

// if (!basket.length) {
//   basketForm.classList.add("basket--clear");
//   basketForm.classList.add("basket--empty");
// } else {
//   basketForm.classList.remove("basket--clear");
//   basketForm.classList.remove("basket--empty");
// }

// if (basketForm.classList.contains("basket--clear")) {
//   clearBasketLabel.classList.remove("visually-hidden");
// } else {
//   clearBasketLabel.classList.add("visually-hidden");
// }

export { calcProductInBasketPrice, basket };

/* ЗАДАЧИ и ВОПРОСЫ
1) Суммировать стоимость в модалке при + - количестве товаров
2) В корзине проверить изменение количества товаров не должно удаляться на 1
3) Настроить суммирвоание общей стоимости корзины
4) Общий счетчик на общее кол-во товаров
5) После нажатия на кнопку другого фильтра, сбрасываются стили уже добавленных товаров
*/
