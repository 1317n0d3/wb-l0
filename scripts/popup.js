const initDeliveryMethodPopup = () => {
  const deliveryMethodPopupBtn1 = document.querySelector(
    "#delivery-method-popup-button-1"
  );
  const deliveryMethodPopupBtn2 = document.querySelector(
    "#delivery-method-popup-button-2"
  );
  const deliveryMethodPopup = document.querySelector("#delivery-method-popup");
  const deliveryMethodCloseBtn = deliveryMethodPopup.querySelector(
    "#delivery-method-popup-close-button"
  );
  const deliveryMethodSelectBtn = deliveryMethodPopup.querySelector(
    "#delivery-method-popup-select-button"
  );

  deliveryMethodPopupBtn1.addEventListener("click", () => {
    deliveryMethodPopup.style.display = "block";
  });

  deliveryMethodPopupBtn2.addEventListener("click", () => {
    deliveryMethodPopup.style.display = "block";
  });

  deliveryMethodCloseBtn.addEventListener("click", () => {
    deliveryMethodPopup.style.display = "none";
  });

  deliveryMethodSelectBtn.addEventListener("click", () => {
    deliveryMethodPopup.style.display = "none";
  });

  deliveryMethodPopup.addEventListener("click", (e) => {
    if (e.target.id === "delivery-method-popup") {
      deliveryMethodPopup.style.display = "none";
    }
  });
};

const initPaymentMethodPopup = () => {
  const paymentMethodPopupBtn1 = document.querySelector(
    "#payment-method-popup-button-1"
  );
  const paymentMethodPopupBtn2 = document.querySelector(
    "#payment-method-popup-button-2"
  );
  const paymentMethodPopup = document.querySelector("#payment-method-popup");
  const paymentMethodCloseBtn = paymentMethodPopup.querySelector(
    "#payment-method-popup-close-button"
  );
  const paymentMethodSelectBtn = paymentMethodPopup.querySelector(
    "#payment-method-popup-select-button"
  );

  paymentMethodPopupBtn1.addEventListener("click", () => {
    paymentMethodPopup.style.display = "block";
  });

  paymentMethodPopupBtn2.addEventListener("click", () => {
    paymentMethodPopup.style.display = "block";
  });

  paymentMethodCloseBtn.addEventListener("click", () => {
    paymentMethodPopup.style.display = "none";
  });

  paymentMethodSelectBtn.addEventListener("click", () => {
    paymentMethodPopup.style.display = "none";
  });

  paymentMethodPopup.addEventListener("click", (e) => {
    if (e.target.id === "payment-method-popup") {
      paymentMethodPopup.style.display = "none";
    }
  });
};

const initPopup = () => {
  initDeliveryMethodPopup();
  initPaymentMethodPopup();
};
