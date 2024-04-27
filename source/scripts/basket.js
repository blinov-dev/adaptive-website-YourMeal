const basketForm = document.querySelector("#order-form");
const body = document.body;

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

const basketCounter = document.querySelector(".basket-header__counter");
const basketInputCounter = document.querySelector("#basket-counter-input");
const clearBasketLabel = document.querySelector(".basket__empty");

const basket = [];

// basketInputCounter.value = basket.length;
// basketCounter.textContent = basketInputCounter.value;

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
//}

export { basket };
