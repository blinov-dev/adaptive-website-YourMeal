const orderForm = document.querySelector("#order-form");
// import { productAddToBasket } from "./product-modal.js";

const screenWidth = window.screen.width;
const SCREEN_WIDTH_DESKTOP = 1024;
if (screenWidth < SCREEN_WIDTH_DESKTOP) {
  orderForm.addEventListener("click", function () {
    orderForm.classList.toggle("basket__mobile--open");
  });
}

