const productsList = document.querySelector(".products__list");
const productTemplateFragment =
  document.querySelector("#catalog-product").content;
const productTemplate =
  productTemplateFragment.querySelector(".products__item");
const productsFragment = document.createDocumentFragment();

function createProduct(products) {
  products.forEach((product) => {
    const catalogProduct = productTemplate.cloneNode(true);

    catalogProduct.querySelector(".product").dataset.productId = product.id;
    catalogProduct.querySelector(".product__img").children[0].src =
      `images/products/${product.category}/` + product.image;

    catalogProduct.querySelector(".product__img").children[0].alt =
      product.title;
    catalogProduct.querySelector(".product__price").textContent =
      product.price + `₽`;
    catalogProduct.querySelector(".product__title").textContent = product.title;
    catalogProduct.querySelector(".product__weight").textContent =
      product.weight;
    catalogProduct.querySelector(".product__description").textContent =
      product.description;

    for (let i = 0; i < product.ingredients.length; i++) {
      const ingredientsList = catalogProduct.querySelector(
        ".product__composition-list"
      );
      const ingredient = document.createElement("li");
      ingredient.classList.add("product__composition-item");
      ingredient.classList.add("composition-product__item");
      ingredient.innerText = product.ingredients[i];
      ingredientsList.appendChild(ingredient);
    }

    if (product.isAvailable) {
      catalogProduct
        .querySelector(".product__button")
        .removeAttribute("disabled", "disabled");
      catalogProduct.querySelector(".product__button").textContent = `Добавить`;
    } else {
      catalogProduct.querySelector(
        ".product__button"
      ).textContent = `Нет в наличии`;
      catalogProduct
        .querySelector(".product__button")
        .setAttribute("disabled", "disabled");
    }

    productsFragment.appendChild(catalogProduct);
  });

  productsList.appendChild(productsFragment);
}

function renderProduct(products) {
  createProduct(products);
}

export { renderProduct };
