import { renderProduct } from "./render-products";
import { products } from "./data-products.js";
const filterButton = document.querySelectorAll(".product-filter__button");

function clearProducts() {
  const rendersProducts = document.querySelectorAll(".products__item");
  rendersProducts.forEach((element) => element.remove());
}

renderProduct(products);

function selectFilter() {
  if (!this.classList.contains("product-filter__button--active")) {
    filterButton.forEach(function (item) {
      item.classList.remove("product-filter__button--active");
    });
    this.classList.add("product-filter__button--active");

    const newProducts = products.slice(0, products.length);

    switch (this.id) {
      case "filter-button-burgers":
        clearProducts();
        const filteredBurgers = newProducts.filter(function (element) {
          return element.category === "burgers";
        });
        renderProduct(filteredBurgers);
        break;
      case "filter-button-snacks":
        clearProducts();
        const filteredSnacks = newProducts.filter(function (element) {
          return element.category === "snacks";
        });
        renderProduct(filteredSnacks);
        break;
      case "filter-button-hotdogs":
        clearProducts();
        const filteredHotdogs = newProducts.filter(function (element) {
          return element.category === "hotdogs";
        });
        renderProduct(filteredHotdogs);
        break;
    }
  }
}

filterButton.forEach(function (element) {
  element.addEventListener("click", selectFilter);
});
