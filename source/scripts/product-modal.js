const modalWrapper = document.querySelector(".modal-wrapper");
const modalCloseButton = document.querySelector(".product-modal__close-button");
const body = document.body;

const productButton = document.querySelectorAll(".product__button");

function modalOpen() {
  modalWrapper.classList.add("product-modal--open");
  body.classList.add("modal-open");
  modalCloseButton.addEventListener("click", modalClose);

  const pickingProduct = this.parentNode;

  document.querySelector(".product-modal__img").children[0].src =
    pickingProduct.querySelector(".product__img").children[0].src;

  // pickingProduct.querySelector(".product__img").children[0].src =
  //   `images/products/${product.category}/` + product.image;

  // catalogProduct.querySelector(".product__img").children[0].alt = product.title;
  // catalogProduct.querySelector(".product__price").textContent =
  //   product.price + `₽`;
  // catalogProduct.querySelector(".product__title").textContent = product.title;
  // catalogProduct.querySelector(".product__weight").textContent = product.weight;

  console.log(pickingProduct);
}

function modalClose() {
  body.classList.remove("modal-open");
  modalWrapper.classList.remove("product-modal--open");
  modalCloseButton.removeEventListener("click", modalClose);
}

productButton.forEach(function (item) {
  item.addEventListener("click", modalOpen);
});
