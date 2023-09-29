const initAvailableItemsListeners = (item) => {
  const input = document.querySelector(`#quantity-item-${item.id}`);
  const minusButton = document.querySelector(`#minus-button-${item.id}`);
  const plusButton = document.querySelector(`#plus-button-${item.id}`);

  setButtonDisabled(minusButton, plusButton, input.value, input.min, input.max);

  plusButton.addEventListener("click", () => {
    setButtonDisabled(
      minusButton,
      plusButton,
      input.value,
      input.min,
      input.max
    );
  });

  minusButton.addEventListener("click", () => {
    setButtonDisabled(
      minusButton,
      plusButton,
      input.value,
      input.min,
      input.max
    );
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
          <div class="mob-main__cart__available-items__item__price">
            <div>
              <span class="mob-main__cart__available-items__item__price__new">${
                item.new_price
              }</span>
              <span class="mob-main__cart__available-items__item__price__currency">${
                item.currency
              }</span>
            </div>
            <span class="mob-main__cart__available-items__item__price__old dashed-gray small-text gray-text">${
              item.old_price
            } ${item.currency}</span>
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
            <div class="main__cart__available-items__item__info__provider">
              <span class="small-text gray-text">${item.provider}</span>
              <img class="icon" src="./assets/icons/info.svg" alt="info icon">
            </div>
          </div>
        </div>
      </div>

      <div class="flex">
        <div class="main__cart__available-items__item__controls">

          <div class="number-input">
            <button class="minus" id="minus-button-${
              item.id
            }" onclick="this.parentNode.querySelector('#quantity-item-${
      item.id
    }').stepDown()"></button>
            <input type="number" min="1" max="${item.remained}" value="${
      item.count
    }" name="quantity" id="quantity-item-${item.id}" readonly>
            <button class="plus" id="plus-button-${
              item.id
            }" onclick="this.parentNode.querySelector('#quantity-item-${
      item.id
    }').stepUp()"></button>
          </div>


          ${
            item.remained
              ? `<span class="main__cart__available-items__item__controls__remained small-text red-text">Осталось ${item.remained} шт.</span>`
              : ``
          }
          <div class="main__cart__available-items__item__controls__buttons">
            <button>
              <img class="icon favorite-icon" src="./assets/icons/favorite.svg" alt="add to favorite icon">
            </button>
            <button>
              <img class="icon trash-can-icon" src="./assets/icons/trash-can.svg" alt="remove icon">
            </button>
          </div>
        </div>
        <div class="main__cart__available-items__item__price">
          <div>
            <span class="${
              item.new_price.split(" ").length > 2
                ? `main__cart__available-items__item__price__new__small`
                : `main__cart__available-items__item__price__new`
            }">${item.new_price}</span>
            <span class="main__cart__available-items__item__price__currency">${
              item.currency
            }</span>
          </div>
          <span class="main__cart__available-items__item__price__old dashed-gray small-text gray-text">${
            item.old_price
          } ${item.currency}</span>
        </div>
      </div>`;

    availableItemsContainer.appendChild(div);
    initAvailableItemsListeners(item);
  });
};
