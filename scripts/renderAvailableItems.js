const initAvailableItemsListeners = (item, availableItems) => {
  const itemCard = document.querySelector(`#item-card-${item.id}`);
  const input = document.querySelector(`#quantity-item-${item.id}`);
  const minusButton = document.querySelector(`#minus-button-${item.id}`);
  const plusButton = document.querySelector(`#plus-button-${item.id}`);
  const favoriteButton = document.querySelector(`#favorite-${item.id}`);
  const trashCanButton = document.querySelector(`#trash-can-${item.id}`);

  setButtonDisabled(minusButton, plusButton, input.value, input.min, input.max);

  setTotalPrice(availableItems, item.currency, item);

  plusButton.addEventListener("click", (event) => {
    plusButton.parentNode.querySelector(`#quantity-item-${item.id}`).stepUp();
    item.count++;

    setTotalPrice(availableItems, item.currency, item);

    setButtonDisabled(
      minusButton,
      plusButton,
      input.value,
      input.min,
      input.max
    );
    event.preventDefault();
  });

  minusButton.addEventListener("click", (event) => {
    minusButton.parentNode
      .querySelector(`#quantity-item-${item.id}`)
      .stepDown();
    item.count--;

    setTotalPrice(availableItems, item.currency, item);

    setButtonDisabled(
      minusButton,
      plusButton,
      input.value,
      input.min,
      input.max
    );
    event.preventDefault();
  });

  favoriteButton.addEventListener("click", (event) => {
    event.preventDefault();
  });

  trashCanButton.addEventListener("click", (event) => {
    itemCard.remove();
    item.count = 0;
    setTotalPrice(availableItems, "сом");

    event.preventDefault();
  });
};

const setButtonDisabled = (minusButton, plusButton, value, min, max) => {
  if (value === min) {
    minusButton.disabled = true;
    plusButton.disabled = false;
  } else if (value === max) {
    minusButton.disabled = false;
    plusButton.disabled = true;
  } else {
    minusButton.disabled = false;
    plusButton.disabled = false;
  }
};

const renderAvailableItems = (availableItems) => {
  const availableItemsContainer = document.querySelector(
    "#availableItemsContainer"
  );

  availableItems.forEach((item) => {
    const div = document.createElement("div");
    div.className = "main__cart__available-items__item";
    div.id = `item-card-${item.id}`;

    div.innerHTML += `
      <div class="flex">
        <div class="main__cart__available-items__item__checkbox">
          <input type="checkbox" class="custom-checkbox" name="select-items" id="item-${
            item.id
          }">
          <label for="item-${item.id}"></label>
          <img src="${
            item.image_url
          }" alt="item photo" class="main__cart__available-items__item__photo">
        </div>
        
        <div class="main__cart__available-items__item__info">
          <div class="mob-main__cart__available-items__item__price block-with-tooltip">
            <div>
              <span class="mob-main__cart__available-items__item__price__new">${
                item.new_price
              }</span>
              <span class="mob-main__cart__available-items__item__price__currency">${
                item.currency
              }</span>
            </div>
            <span class="mob-main__cart__available-items__item__price__old dashed-gray small-text gray-text block-with-tooltip__trigger">${
              item.old_price
            } ${item.currency}</span>
            
            <div class="block-with-tooltip__container tooltip-column-container">
              <div>
                <span class="block-with-tooltip__container__text tooltip-text-discount">Скидка 55%</span>
                <span class="block-with-tooltip__container__text tooltip-text-discount-value">-300 сом</span>
              </div>
              <div>
                <span class="block-with-tooltip__container__text tooltip-text-discount">Скидка покупателя 10%</span>
                <span class="block-with-tooltip__container__text tooltip-text-discount-value">-30 сом</span>
              </div>
            </div>
          </div>

          <span class="main__cart__available-items__item__info__title">${
            item.title
          }</span>
        
          <div class="main__cart__available-items__item__info__params">
            ${
              item.color
                ? `<span class="small-text main__cart__available-items__item__info__params__color">
                  Цвет: ${item.color}
                </span>`
                : ``
            }
            ${
              item.size
                ? `<span class="small-text main__cart__available-items__item__info__params__size">Размер: ${item.size}</span>`
                : ``
            }
          </div>
        
          <div>
            <span class="small-text gray-text">${item.warehouse}</span>
            <div class="main__cart__available-items__item__info__provider block-with-tooltip">
              <span class="small-text gray-text">${item.provider}</span>
              <img class="icon block-with-tooltip__trigger" src="./assets/icons/info.svg" alt="info icon">
              
              <div class="block-with-tooltip__container tooltip-column-container">
                <div>
                  <span class="block-with-tooltip__container__text tooltip-title">OOO «МЕГАПРОФСТИЛЬ»</span>
                </div>
                <div>
                  <span class="block-with-tooltip__container__text">ОГРН: 5167746237148</span>
                </div>
                <div>
                  <span class="block-with-tooltip__container__text">129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 34</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex">
        <div class="main__cart__available-items__item__controls">

          <div class="number-input">
            <button class="minus" id="minus-button-${item.id}"></button>
            <input type="number" min="1" max="${item.remained}" value="${
      item.count
    }" name="quantity" id="quantity-item-${item.id}" readonly>
            <button class="plus" id="plus-button-${item.id}"></button>
          </div>


          ${
            item.remained
              ? `<span class="main__cart__available-items__item__controls__remained small-text red-text">Осталось ${item.remained} шт.</span>`
              : ``
          }
          <div class="main__cart__available-items__item__controls__buttons">
            <button id="favorite-${item.id}">
              <img class="icon favorite-icon" src="./assets/icons/favorite.svg" alt="add to favorite icon">
            </button>
            <button id="trash-can-${item.id}">
              <img class="icon trash-can-icon" src="./assets/icons/trash-can.svg" alt="remove icon">
            </button>
          </div>
        </div>
        <div class="main__cart__available-items__item__price block-with-tooltip">
          <div>
            <span class="${
              item.new_price.toString().length > 6
                ? `main__cart__available-items__item__price__new__small`
                : `main__cart__available-items__item__price__new`
            }" id="price-new-${item.id}">${item.new_price}</span>
            <span class="main__cart__available-items__item__price__currency" id="price-currency-${
              item.id
            }">${item.currency}</span>
          </div>
          <span class="main__cart__available-items__item__price__old dashed-gray small-text gray-text block-with-tooltip__trigger" id="price-old-${
            item.id
          }">${item.old_price} ${item.currency}</span>
          <div class="block-with-tooltip__container tooltip-column-container">
            <div>
              <span class="block-with-tooltip__container__text tooltip-text-discount">Скидка 55%</span>
              <span class="block-with-tooltip__container__text tooltip-text-discount-value">-300 сом</span>
            </div>
            <div>
              <span class="block-with-tooltip__container__text tooltip-text-discount">Скидка покупателя 10%</span>
              <span class="block-with-tooltip__container__text tooltip-text-discount-value">-30 сом</span>
            </div>
          </div>
        </div>
      </div>`;

    availableItemsContainer.appendChild(div);
    initAvailableItemsListeners(item, availableItems);
  });
};
