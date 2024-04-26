import { modalClose } from "./product-modal.js";

function productAddToBasket() {
  const modalWrapper = document.querySelector(".modal-wrapper");
  const basketProductsList = document.querySelector(".basket__list");
  const basketTemplateFragment =
    document.querySelector("#basket-product").content;
  const basketTemplate = basketTemplateFragment.querySelector(".basket__item");

  const basketFragment = document.createDocumentFragment();
  const basketProduct = basketTemplate.cloneNode(true);

  let basketProductId = basketProduct.querySelector(".thumbnails-product")
    .dataset.basketProductId;

  basketProductId =
    modalWrapper.querySelector(".product-modal").dataset.modalProductId;

  basketProduct.querySelector(".thumbnails-product__img").children[0].src =
    modalWrapper.querySelector(".product-modal__img").children[0].src;

  const modalProductQuantity =
    modalWrapper.querySelector(".product-quantity").textContent;

    console.log();

  basketProduct.querySelector(".product-quantity").textContent =
    modalProductQuantity;

  basketFragment.appendChild(basketProduct);

  basketProductsList.appendChild(basketFragment);

  // console.log(basketProductId);
  console.log(basketProduct.querySelector(".product-quantity").textContent);
  modalClose();
}

export { productAddToBasket };
