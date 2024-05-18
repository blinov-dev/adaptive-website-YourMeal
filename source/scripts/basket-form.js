const basketForm = document.querySelector("#order-form");
let formResult = document.querySelector("#form-result");

basketForm.addEventListener("submit", submitForm);
async function submitForm(event) {
  event.preventDefault(); // отключаем перезагрузку/перенаправление страницы
  try {
    // Формируем запрос
    const response = await fetch(event.target.action, {
      method: "POST",
      body: new FormData(event.target),
    });
    // проверяем, что ответ есть
    if (!response.ok)
      throw `Ошибка при обращении к серверу: ${response.status}`;
    // проверяем, что ответ действительно JSON
    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      throw "Ошибка. Ответ не JSON";
    }
    // обрабатываем запрос
    const json = await response.json();
    if (json.result === "success") {
      // в случае успеха
      alert(json.info);
    } else {
      // в случае ошибки
      console.log(json.desc);
      throw json.info;
    }
  } catch (error) {
    // обработка ошибки
    alert(error);
  }
  basketForm.reset();
  window.location.reload();
}

function calcBasketInfo(basketResultInput) {
  const basketProducts = document.querySelectorAll(".basket__item");

  const productsTotalValue = [];
  const products = [];
  let product = {
    name: "",
    counter: 0,
    price: 0,
  };

  basketProducts.forEach((basketProduct) => {
    const productName = basketProduct.querySelector(
      ".product-input-name"
    ).value;

    const productCounter = basketProduct.querySelector(
      ".product-input-counter"
    ).value;

    const productPrice = basketProduct.querySelector(
      ".product-input-price"
    ).value;

    product = {
      name: productName,
      counter: productCounter,
      price: productPrice,
    };
    products.push(product);
  });

  productsTotalValue.push(basketResultInput);

  let result = JSON.stringify(products);
  formResult.setAttribute("value", result);

  return formResult;
}

export { calcBasketInfo };
