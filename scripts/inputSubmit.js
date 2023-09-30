const inputSubmit = () => {
  const prepayLabel = document.querySelector("#prepay-label");
  const prepayCheckbox = document.querySelector("#prepay");

  const inputSubmitOrder = document.querySelector("#input-submit-order");

  prepayLabel.addEventListener("click", () => {
    const totalPrice = document.querySelector("#total-price").textContent;

    if (!prepayCheckbox.checked) {
      inputSubmitOrder.value = totalPrice;
    } else {
      inputSubmitOrder.value = "Заказать";
    }
  });
};
