import { renderProduct } from "./render-products";
import { products } from "./data-products.js";
import { addModalOpenEventToProductButton } from "./product-modal.js";
const filterButton = document.querySelectorAll(".product-filter__button");
const buttonFilteredAll = document.querySelector("#all");

function selectProducts(selectedFilterId) {
  const rendersProducts = document.querySelectorAll(".products__item");

  rendersProducts.forEach(function (element) {
    const productsCategory = element.children[0].dataset.productCategory;
    element.classList.add("not-selected");
    if (productsCategory === selectedFilterId) {
      element.classList.remove("not-selected");
      element.classList.add("selected");
    }
  });
}

function selectAllProducts() {
  const rendersProducts = document.querySelectorAll(".products__item");
  rendersProducts.forEach(function (element) {
    element.classList.remove("not-selected");
    element.classList.add("selected");
  });
}
function selectFilter() {
  if (!this.classList.contains("product-filter__button--active")) {
    filterButton.forEach(function (item) {
      item.classList.remove("product-filter__button--active");
    });
    this.classList.add("product-filter__button--active");

    const selectedFilterId = this.id;
    switch (selectedFilterId) {
      case "all":
        selectAllProducts();
        addModalOpenEventToProductButton();
        break;
      case "burgers":
        selectProducts(selectedFilterId);
        addModalOpenEventToProductButton();
        break;
      case "snacks":
        selectProducts(selectedFilterId);
        addModalOpenEventToProductButton();
        break;
      case "hotdogs":
        selectProducts(selectedFilterId);
        addModalOpenEventToProductButton();
        break;
    }
  }
}

filterButton.forEach(function (element) {
  element.addEventListener("click", selectFilter);
});

function renderAllProducts() {
  const newProducts = products.slice(0, products.length);

  renderProduct(newProducts);
}

// Отрисовка всех элементов на странице
renderAllProducts();

// Первый клик на всех проудктах
buttonFilteredAll.click();
