const orderForm = document.querySelector("#order-form");

const screenWidth = window.screen.width;
const SCREEN_WIDTH_DESKTOP = 1024;

if (screenWidth < SCREEN_WIDTH_DESKTOP) {
  orderForm.addEventListener("click", function () {
    orderForm.classList.toggle("basket__mobile--open");
  });
}



