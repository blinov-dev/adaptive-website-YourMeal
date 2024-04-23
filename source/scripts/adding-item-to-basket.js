// const basketList = document.querySelector(".basket__list");
// const basketTemplateFragment =
//   document.querySelector("#catalog-product").content;
// const productTemplate =
//   productTemplateFragment.querySelector(".products__item");
// const productsFragment = document.createDocumentFragment();

// function createProduct(products) {
//   products.forEach((product) => {
//     const catalogProduct = productTemplate.cloneNode(true);

//     catalogProduct.querySelector(".product__img").children[0].src =
//       `images/products/${product.category}/` + product.image;

//     catalogProduct.querySelector(".product__img").children[0].alt =
//       product.title;
//     catalogProduct.querySelector(".product__price").textContent =
//       product.price + `₽`;
//     catalogProduct.querySelector(".product__title").textContent = product.title;
//     catalogProduct.querySelector(".product__weight").textContent =
//       product.weight;

//     if (product.isAvailable) {
//       catalogProduct
//         .querySelector(".product__button")
//         .removeAttribute("disabled", "disabled");
//       catalogProduct.querySelector(".product__button").textContent = `Добавить`;
//     } else {
//       catalogProduct.querySelector(
//         ".product__button"
//       ).textContent = `Нет в наличии`;
//       catalogProduct
//         .querySelector(".product__button")
//         .setAttribute("disabled", "disabled");
//     }

//     productsFragment.appendChild(catalogProduct);
//   });

//   productsList.appendChild(productsFragment);
// }
