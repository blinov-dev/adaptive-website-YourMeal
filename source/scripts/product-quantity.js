const controlButtonDecrease = document.querySelector(".control-decrease");
const controlButtonIncrease = document.querySelector(".control-increase");
const controlInput = document.querySelector("#modal-product-input-counter");
const productQuantity = document.querySelector(".product-modal__quantity");

const PRODUCT_QUANTITY_DEFAULT = 1;
controlInput.value = parseInt(PRODUCT_QUANTITY_DEFAULT);
productQuantity.textContent = controlInput.value;
let currentValue = controlInput.value;

function productQuantityDefault() {
  controlButtonDecrease.setAttribute("disabled", "disabled");
  currentValue = PRODUCT_QUANTITY_DEFAULT;
  controlInput.value = currentValue;
  productQuantity.textContent = currentValue;
  controlButtonDecrease.removeEventListener("click", decreaseProductQuantity);
  controlButtonIncrease.removeEventListener("click", increaseProductQuantity);
}

function decreaseProductQuantity() {
  if (currentValue >= PRODUCT_QUANTITY_DEFAULT) {
    controlButtonDecrease.removeAttribute("disabled", "disabled");
    currentValue--;
    controlInput.value = currentValue;
    productQuantity.textContent = currentValue;
  } else {
    controlButtonDecrease.setAttribute("disabled", "disabled");
  }
  return currentValue;
}

function increaseProductQuantity() {
  if (currentValue >= PRODUCT_QUANTITY_DEFAULT) {
    currentValue++;
    controlInput.value = currentValue;
    productQuantity.textContent = currentValue;
    controlButtonDecrease.removeAttribute("disabled", "disabled");
  }
  return currentValue;
}

function productControlActive() {
  if ((currentValue = PRODUCT_QUANTITY_DEFAULT)) {
    controlButtonDecrease.setAttribute("disabled", "disabled");
  }
  controlButtonDecrease.addEventListener("click", decreaseProductQuantity);
  controlButtonIncrease.addEventListener("click", increaseProductQuantity);
}

export { productQuantityDefault, productControlActive };
