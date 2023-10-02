const convertPriceFormat = (number) => {
  return `${Math.floor(number)
    .toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, " ")}`;
};

const setTotalPrice = (availableItems, currency, item) => {
  const totalPriceElem = document.querySelector("#total-price");
  const totalPriceWithoutDiscountElem = document.querySelector(
    "#total-price-without-discount"
  );
  const totalDiscountElem = document.querySelector("#total-discount");
  const selectedItems = availableItems.filter(
    (availableItem) => availableItem.selected === true
  );

  const totalPrice = selectedItems.reduce(
    (prev, current) => prev + current.new_price * current.count,
    0
  );

  const totalPriceWithoutDiscount = selectedItems.reduce(
    (prev, current) => prev + current.old_price * current.count,
    0
  );

  const totalDiscount = totalPriceWithoutDiscount - totalPrice;

  totalPriceElem.textContent = `${convertPriceFormat(totalPrice)} ${currency}`;

  totalPriceWithoutDiscountElem.textContent = `${convertPriceFormat(
    totalPriceWithoutDiscount
  )} ${currency}`;

  totalDiscountElem.textContent = `${
    totalDiscount === 0 ? "" : "-"
  }${convertPriceFormat(totalDiscount)} ${currency}`;

  const prepayCheckbox = document.querySelector("#prepay");

  const inputSubmitOrder = document.querySelector("#input-submit-order");

  if (prepayCheckbox.checked) {
    inputSubmitOrder.value = `${convertPriceFormat(totalPrice)} ${currency}`;
  } else {
    inputSubmitOrder.value = "Заказать";
  }

  if (totalPrice === 0) {
    inputSubmitOrder.disabled = true;
  } else {
    inputSubmitOrder.disabled = false;
  }

  if (item) {
    const itemTotalPriceElem = document.querySelector(`#price-new-${item.id}`);
    const itemPriceCurrencyElem = document.querySelector(
      `#price-currency-${item.id}`
    );
    const itemOldPriceElem = document.querySelector(`#price-old-${item.id}`);

    const itemTotalPrice = item.new_price * item.count;
    const itemOldPrice = item.old_price * item.count;

    itemTotalPriceElem.textContent = `${convertPriceFormat(itemTotalPrice)}`;
    itemPriceCurrencyElem.textContent = `${item.currency}`;
    itemOldPriceElem.textContent = `${convertPriceFormat(
      itemOldPrice
    )} ${currency}`;
  }
};
