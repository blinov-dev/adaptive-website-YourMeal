/* в этот файл добавляет скрипты*/
import './filter-products.js';
import './basket.js';
import './form.js';
import scrollBtn from './scroll-up.js';

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

scrollBtn();
