const basketForm = document.querySelector("#order-form");
const basketSubmitButton = document.querySelector(".basket__submit");

const formModalWrapper = document.querySelector(".form-wrapper");
const modalFormCloseButton = document.querySelector(".form-info__close-button");
const body = document.body;

function formModalOpen() {
  formModalWrapper.classList.add("form--open");
  body.classList.add("modal-open");

  const basketResultValue = document.querySelector("#basket-result-value");
  const basketOrder = document.querySelector("#basket-order");

  basketOrder.setAttribute("value", basketResultValue.textContent);

  console.log(basketOrder);
  modalFormCloseButton.addEventListener("click", formModalClose);
}
basketSubmitButton.addEventListener("click", formModalOpen);

function formModalClose() {
  formModalWrapper.classList.remove("form--open");
  body.classList.remove("modal-open");
  modalFormCloseButton.removeEventListener("click", formModalClose);
}
modalFormCloseButton.addEventListener("click", formModalClose);

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
basketForm.addEventListener("submit", submitForm);
