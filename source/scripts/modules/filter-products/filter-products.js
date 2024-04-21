const filterButton = document.querySelectorAll(".product-filter__button");

function selectFilter() {
  if (!this.classList.contains("product-filter__button--active")) {
    filterButton.forEach(function (item) {
      item.classList.remove("product-filter__button--active");
    });
    this.classList.add("product-filter__button--active");
  }
}

filterButton.forEach(function (element) {
  element.addEventListener("click", selectFilter);
});
