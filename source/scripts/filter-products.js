import { renderProduct } from './render-products';
import { products } from './data-products.js';
import { addModalOpenEventToProductButton } from './product-modal.js';
const filterButton = document.querySelectorAll('.product-filter__button');
const buttonFilteredAll = document.querySelector('#all');

function selectProducts(selectedFilterId) {
  const rendersProducts = document.querySelectorAll('.products__item');

  rendersProducts.forEach((element) => {
    const productsCategory = element.children[0].dataset.productCategory;
    element.classList.add('not-selected');
    if (productsCategory === selectedFilterId) {
      element.classList.remove('not-selected');
      element.classList.add('selected');
    }
  });
}

function selectAllProducts() {
  const rendersProducts = document.querySelectorAll('.products__item');
  rendersProducts.forEach((element) => {
    element.classList.remove('not-selected');
    element.classList.add('selected');
  });
}
function selectFilter() {
  if (!this.classList.contains('product-filter__button--active')) {
    filterButton.forEach((item) => {
      item.classList.remove('product-filter__button--active');
    });
    this.classList.add('product-filter__button--active');

    const selectedFilterId = this.id;
    const productsCategoryTitle = document.querySelector('.products__title');
    switch (selectedFilterId) {
      case 'all':
        selectAllProducts();
        addModalOpenEventToProductButton();
        productsCategoryTitle.textContent = 'Вся продукция';
        break;
      case 'burgers':
        selectProducts(selectedFilterId);
        addModalOpenEventToProductButton();
        productsCategoryTitle.textContent = 'Бургеры';
        break;
      case 'snacks':
        selectProducts(selectedFilterId);
        addModalOpenEventToProductButton();
        productsCategoryTitle.textContent = 'Снеки';
        break;
      case 'hotdogs':
        selectProducts(selectedFilterId);
        addModalOpenEventToProductButton();
        productsCategoryTitle.textContent = 'Хот-доги';
        break;
      case 'combo':
        selectProducts(selectedFilterId);
        addModalOpenEventToProductButton();
        productsCategoryTitle.textContent = 'Комбо';
        break;
    }
  }
}

filterButton.forEach((element) => {
  element.addEventListener('click', selectFilter);
});

function renderAllProducts() {
  const newProducts = products.slice(0, products.length);

  renderProduct(newProducts);
}

// Отрисовка всех элементов на странице
renderAllProducts();

// Первый клик на всех продуктах
buttonFilteredAll.click();

function mobileFilter() {
  const filterMobileButton = document.querySelector('.filter-mobile-button');
  const filter = document.querySelector('.product-filter');

  if (window.innerWidth < 768) {
    filter.classList.add('mobile-filter');
    filter.classList.add('mobile-filter--open');
    filterMobileButton.addEventListener('click', () => {
      filter.classList.toggle('mobile-filter--open');
    });
  } else {
    filter.classList.remove('mobile-filter');
  }
}
mobileFilter();
