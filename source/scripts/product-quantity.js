import { calcProductInBasketPrice } from "./basket.js";

function changeModalProductQuantity() {
  const productModal = document.querySelector(".product-modal");
  const controlButtonDecrease = productModal.querySelector(".control-decrease");
  const controlButtonIncrease = productModal.querySelector(".control-increase");
  const productQuantity = productModal.querySelector(".product-quantity");
  const PRODUCT_QUANTITY_DEFAULT = 1;
  let currentValue = PRODUCT_QUANTITY_DEFAULT;
  productQuantity.textContent = currentValue;

  function productQuantityDefault() {
    currentValue = PRODUCT_QUANTITY_DEFAULT;
    productQuantity.textContent = currentValue;
  }

  function decreaseProductQuantity() {
    if (currentValue - PRODUCT_QUANTITY_DEFAULT >= PRODUCT_QUANTITY_DEFAULT) {
      this.removeAttribute("disabled", "disabled");
      currentValue--;
      productQuantity.textContent = currentValue;
    }
    if (currentValue === PRODUCT_QUANTITY_DEFAULT) {
      this.setAttribute("disabled", "disabled");
    }
    return currentValue;
  }

  function increaseProductQuantity() {
    controlButtonDecrease.removeAttribute("disabled", "disabled");
    if (currentValue >= PRODUCT_QUANTITY_DEFAULT) {
      currentValue++;
      productQuantity.textContent = currentValue;
    }
    return currentValue;
  }

  productQuantityDefault();
  controlButtonDecrease.setAttribute("disabled", "disabled");
  controlButtonDecrease.addEventListener("click", decreaseProductQuantity);
  controlButtonIncrease.addEventListener("click", increaseProductQuantity);

  return productQuantity;
}

function changeBasketProductQuantity(
  newValue,
  basketProduct,
  productInBasketButton
) {
  const controlButtonDecrease =
    basketProduct.querySelector(".control-decrease");
  const controlButtonIncrease =
    basketProduct.querySelector(".control-increase");
  const productQuantity = basketProduct.querySelector(".product-quantity");

  const PRODUCT_QUANTITY_DEFAULT = 1;
  let currentValue = newValue;
  productQuantity.textContent = currentValue;

  controlButtonDecrease.addEventListener(
    "click",
    decreaseBasketProductQuantity
  );
  controlButtonIncrease.addEventListener(
    "click",
    increaseBasketProductQuantity
  );

  function decreaseBasketProductQuantity(evt) {
    evt.stopPropagation();
    if (currentValue - PRODUCT_QUANTITY_DEFAULT === 0) {
      basketProduct.remove();
      productInBasketButton.removeAttribute("disabled", "disabled");
      productInBasketButton.textContent = `Добавить`;
      productInBasketButton.style.backgroundColor = "#f2f2f3";
    }
    if (currentValue - PRODUCT_QUANTITY_DEFAULT >= PRODUCT_QUANTITY_DEFAULT) {
      this.removeAttribute("disabled", "disabled");
      currentValue--;
      productQuantity.textContent = currentValue;
    }
    calcProductInBasketPrice();
    return currentValue;
  }

  function increaseBasketProductQuantity(evt) {
    evt.stopPropagation();
    controlButtonDecrease.removeAttribute("disabled", "disabled");
    if (currentValue >= PRODUCT_QUANTITY_DEFAULT) {
      currentValue++;
      productQuantity.textContent = currentValue;
    }
    calcProductInBasketPrice();
    return currentValue;
  }
}

export { changeModalProductQuantity, changeBasketProductQuantity };
