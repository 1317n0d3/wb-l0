const renderUnavailableItems = (unavailableItems) => {
  const unavailableItemsContainer = document.querySelector(
    "#unavailableItemsContainer"
  );

  unavailableItems.forEach((item) => {
    unavailableItemsContainer.innerHTML += `
      <div class="main__cart__available-items__item" id="item-card-${item.id}">
        <div class="flex">
          <div class="main__cart__available-items__item__checkbox">
            <img src="${
              item.image_url
            }" alt="item photo" class="main__cart__available-items__item__photo">
          </div>
          
          <div class="main__cart__available-items__item__info">
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
          <div class="main__cart__available-items__item__controls flex-column">
            <div class="main__cart__available-items__item__controls__buttons">
              <button>
                <img class="icon" src="./assets/icons/favorite.svg" alt="add to favorite icon">
              </button>
              <button>
                <img class="icon" src="./assets/icons/trash-can.svg" alt="remove icon">
              </button>
            </div>
          </div>
          <div class="main__cart__available-items__item__price flex-column"></div>
        </div>
      </div>`;
  });
};
