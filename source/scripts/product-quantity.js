function changeModalProductQuantity() {
  const productModal = document.querySelector(".product-modal");
  const controlButtonDecrease = productModal.querySelector(".control-decrease");
  const controlButtonIncrease = productModal.querySelector(".control-increase");
  const controlInput = productModal.querySelector(".product-input-counter");
  const productQuantity = productModal.querySelector(".product-quantity");

  const PRODUCT_QUANTITY_DEFAULT = 1;
  controlInput.value = PRODUCT_QUANTITY_DEFAULT;
  let currentValue = controlInput.value;
  productQuantity.textContent = currentValue;

  function productQuantityDefault() {
    controlInput.value = PRODUCT_QUANTITY_DEFAULT;
    currentValue = controlInput.value;
    productQuantity.textContent = currentValue;
  }

  function decreaseProductQuantity() {
    if (currentValue - PRODUCT_QUANTITY_DEFAULT >= PRODUCT_QUANTITY_DEFAULT) {
      this.removeAttribute("disabled", "disabled");
      currentValue--;
      controlInput.value = currentValue;
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
      controlInput.value = currentValue;
      productQuantity.textContent = currentValue;
    }
    return currentValue;
  }

  productQuantityDefault();
  controlButtonDecrease.setAttribute("disabled", "disabled");
  controlButtonDecrease.addEventListener("click", decreaseProductQuantity);
  controlButtonIncrease.addEventListener("click", increaseProductQuantity);
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
  const controlInput = basketProduct.querySelector(".product-input-counter");
  const productQuantity = basketProduct.querySelector(".product-quantity");

  const PRODUCT_QUANTITY_DEFAULT = 1;
  let currentValue = newValue;
  controlInput.value = currentValue;
  productQuantity.textContent = controlInput.value;

  // if (currentValue > PRODUCT_QUANTITY_DEFAULT) {
  //   controlButtonDecrease.removeAttribute("disabled", "disabled");
  // } else {
  //   controlButtonDecrease.setAttribute("disabled", "disabled");
  // }

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
    if (currentValue - PRODUCT_QUANTITY_DEFAULT >= PRODUCT_QUANTITY_DEFAULT) {
      this.removeAttribute("disabled", "disabled");
      currentValue--;
      controlInput.value = currentValue;
      productQuantity.textContent = currentValue;
    }
    if (currentValue - PRODUCT_QUANTITY_DEFAULT === 0) {
      basketProduct.remove();
      productInBasketButton.removeAttribute("disabled", "disabled");
      productInBasketButton.textContent = `Добавить`;
      productInBasketButton.style.backgroundColor = "#f2f2f3";
    }
    console.log(currentValue);
    return currentValue;
  }

  function increaseBasketProductQuantity(evt) {
    evt.stopPropagation();
    controlButtonDecrease.removeAttribute("disabled", "disabled");
    if (currentValue >= PRODUCT_QUANTITY_DEFAULT) {
      currentValue++;
      controlInput.value = currentValue;
      productQuantity.textContent = currentValue;
    }
    console.log(currentValue);
    return currentValue;
  }
}

export { changeModalProductQuantity, changeBasketProductQuantity };
