function changeProductQuantity() {
  const controlButtonDecrease = document.querySelector(".control-decrease");
  const controlButtonIncrease = document.querySelector(".control-increase");
  const controlInput = document.querySelector(".product-input-counter");
  let productQuantity = document.querySelector(".product-quantity");

  const PRODUCT_QUANTITY_DEFAULT = 1;
  controlInput.value = PRODUCT_QUANTITY_DEFAULT;
  let currentValue = controlInput.value;
  productQuantity.textContent = currentValue;

  controlButtonDecrease.setAttribute("disabled", "disabled");

  function decreaseProductQuantity() {
    if (currentValue - PRODUCT_QUANTITY_DEFAULT >= PRODUCT_QUANTITY_DEFAULT) {
      this.removeAttribute("disabled", "disabled");
      currentValue--;
      controlInput.value = currentValue;
      productQuantity.textContent = currentValue;
      console.log(this);
    }
    if (currentValue === PRODUCT_QUANTITY_DEFAULT) {
      this.setAttribute("disabled", "disabled");
    }
    console.log(currentValue);
    return currentValue;
  }

  function increaseProductQuantity() {
    controlButtonDecrease.removeAttribute("disabled", "disabled");
    if (currentValue >= PRODUCT_QUANTITY_DEFAULT) {
      currentValue++;
      controlInput.value = currentValue;
      productQuantity.textContent = currentValue;

      console.log(this);
    }
    console.log(currentValue);
    return currentValue;
  }

  controlButtonDecrease.addEventListener("click", decreaseProductQuantity);
  controlButtonIncrease.addEventListener("click", increaseProductQuantity);
}

// function productQuantityDefault() {
//   // const controlInput = document.querySelector(".product-input-counter");
//   // let productQuantity = document.querySelector(".product-quantity");
//   // // controlInput.value = PRODUCT_QUANTITY_DEFAULT;
//   // // let currentValue = controlInput.value;
//   // // productQuantity.textContent = currentValue;
//   // console.log(controlInput.value);
//   // console.log(currentValue);
//   // console.log(productQuantity.textContent);

//   const controlButtonDecrease = document.querySelector(".control-decrease");
//   const controlButtonIncrease = document.querySelector(".control-increase");
//   const controlInput = document.querySelector(".product-input-counter");
//   let productQuantity = document.querySelector(".product-quantity");

//   controlInput.value = PRODUCT_QUANTITY_DEFAULT;
//   let currentValue = controlInput.value;
//   productQuantity.textContent = currentValue;

//   controlButtonDecrease.setAttribute("disabled", "disabled");

//   function decreaseProductQuantity() {
//     if (currentValue - PRODUCT_QUANTITY_DEFAULT >= PRODUCT_QUANTITY_DEFAULT) {
//       this.removeAttribute("disabled", "disabled");
//       currentValue--;
//       controlInput.value = currentValue;
//       productQuantity.textContent = currentValue;
//     }
//     if (currentValue === PRODUCT_QUANTITY_DEFAULT) {
//       this.setAttribute("disabled", "disabled");
//     }
//     return currentValue;
//   }

//   function increaseProductQuantity() {
//     controlButtonDecrease.removeAttribute("disabled", "disabled");
//     if (currentValue >= PRODUCT_QUANTITY_DEFAULT) {
//       currentValue++;
//       controlInput.value = currentValue;
//       productQuantity.textContent = currentValue;

//       // console.log(this);
//     }
//     // console.log(currentValue);
//     return currentValue;
//   }

//   controlButtonDecrease.addEventListener("click", decreaseProductQuantity);
//   controlButtonIncrease.addEventListener("click", increaseProductQuantity);
// }

export { changeProductQuantity };
// function decreaseProductQuantity() {
//   controlButtonDecrease.forEach(function (item) {
//     if (currentValue >= PRODUCT_QUANTITY_DEFAULT) {
//       item.removeAttribute("disabled", "disabled");
//       currentValue--;
//       controlInput.forEach(function (element) {
//         element.value = currentValue;
//         console.log(element.value);
//       });
//     } else {
//       item.setAttribute("disabled", "disabled");
//     }
//     // getProductQuantity();
//     return currentValue;
//   });
// }

// function increaseProductQuantity() {
//   controlButtonIncrease.forEach(function (item) {
//     if (currentValue >= PRODUCT_QUANTITY_DEFAULT) {
//       currentValue++;
//       controlInput.value = currentValue;
//       // controlButtonDecrease.forEach(function (item) {
//       //   item.setAttribute("disabled", "disabled");
//       // });
//     }
//     if (currentValue >= 10) {
//       item.setAttribute("disabled", "disabled");
//     }
//     // getProductQuantity();
//     return currentValue;
//   });
// }

// function productControlActive() {
//   productQuantityDefault();
//   // getProductQuantity();
//   // controlButtonDecrease = document.querySelectorAll(".control-decrease");
//   // controlButtonIncrease = document.querySelectorAll(".control-increase");
//   // if ((currentValue = PRODUCT_QUANTITY_DEFAULT)) {
//   //   controlButtonDecrease.setAttribute("disabled", "disabled");
//   // }

//   controlButtonDecrease.forEach(function (item) {
//     item.addEventListener("click", decreaseProductQuantity);
//   });
//   controlButtonIncrease.forEach(function (item) {
//     item.addEventListener("click", increaseProductQuantity);
//   });
// }

// export { productQuantityDefault, productControlActive };

// Надо все передалть!!!
