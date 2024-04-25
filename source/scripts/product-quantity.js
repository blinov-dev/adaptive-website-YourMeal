let controlButtonDecrease = document.querySelectorAll(".control-decrease");
let controlButtonIncrease = document.querySelectorAll(".control-increase");
let controlInput = document.querySelectorAll(".product-input-counter");
let productQuantity = document.querySelectorAll(".product-quantity");

const PRODUCT_QUANTITY_DEFAULT = 1;
let currentValue = PRODUCT_QUANTITY_DEFAULT;

console.log(currentValue);

// Поиск всех инпутов в баскете и изменение их стандартного занчения
function productInputDefaultValue() {
  controlInput = document.querySelectorAll(".product-input-counter");
  controlInput.forEach(function (element) {
    element.value = parseInt(PRODUCT_QUANTITY_DEFAULT);
    console.log(element.value);
  });
}

function getProductQuantity() {
  productQuantity.forEach(function (element) {
    element.textContent = controlInput.value;
    console.log(element.textContent);
  });
}

// productQuantity.textContent = controlInput.value;

function productQuantityDefault() {
  controlButtonDecrease.forEach(function (item) {
    item.setAttribute("disabled", "disabled");
  });
  // controlButtonDecrease.setAttribute("disabled", "disabled");
  currentValue = PRODUCT_QUANTITY_DEFAULT;
  controlInput.value = currentValue;
  getProductQuantity();
  // productQuantity.textContent = currentValue;
  // controlButtonDecrease.removeEventListener("click", decreaseProductQuantity);
  // controlButtonIncrease.removeEventListener("click", increaseProductQuantity);
}

function decreaseProductQuantity() {
  controlButtonDecrease.forEach(function (item) {
    if (currentValue >= PRODUCT_QUANTITY_DEFAULT) {
      item.removeAttribute("disabled", "disabled");
      currentValue--;
      controlInput.forEach(function (element) {
        element.value = currentValue;
        console.log(element.value);
      });
    } else {
      item.setAttribute("disabled", "disabled");
    }
    getProductQuantity();
    return currentValue;
  });
}

function increaseProductQuantity() {
  controlButtonIncrease.forEach(function (item) {
    if (currentValue >= PRODUCT_QUANTITY_DEFAULT) {
      currentValue++;
      controlInput.value = currentValue;
      controlButtonDecrease.forEach(function (item) {
        item.setAttribute("disabled", "disabled");
      });
    }
    if (currentValue >= 10) {
      item.setAttribute("disabled", "disabled");
    }
    getProductQuantity();
    return currentValue;
  });
}

function productControlActive() {
  productInputDefaultValue();
  getProductQuantity();
  controlButtonDecrease = document.querySelectorAll(".control-decrease");
  controlButtonIncrease = document.querySelectorAll(".control-increase");
  // if ((currentValue = PRODUCT_QUANTITY_DEFAULT)) {
  //   controlButtonDecrease.setAttribute("disabled", "disabled");
  // }

  controlButtonDecrease.forEach(function (item) {
    item.addEventListener("click", decreaseProductQuantity);
  });
  controlButtonIncrease.forEach(function (item) {
    item.addEventListener("click", increaseProductQuantity);
  });
}

export { productQuantityDefault, productControlActive };



// Надо все передалть!!!