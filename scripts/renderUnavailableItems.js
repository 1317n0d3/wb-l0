const renderUnavailableItems = (unavailableItems) => {
  const unavailableItemsContainer = document.querySelector(
    "#unavailableItemsContainer"
  );

  unavailableItems.forEach((item) => {
    unavailableItemsContainer.innerHTML += `
      <div class="main__cart__unavailable-items__item" id="item-card-${
        item.id
      }">
        <div class="flex">
            <img src="${
              item.image_url
            }" alt="item photo" class="main__cart__unavailable-items__item__photo">
          
          <div class="main__cart__unavailable-items__item__info">
            <span class="main__cart__unavailable-items__item__info__title gray-text">${
              item.title
            }</span>
          
            <div class="main__cart__unavailable-items__item__info__params">
              ${
                item.color
                  ? `<span class="small-text gray-text main__cart__unavailable-items__item__info__params__color">
                    Цвет: ${item.color}
                  </span>`
                  : ``
              }
              ${
                item.size
                  ? `<span class="small-text gray-text main__cart__unavailable-items__item__info__params__size">Размер: ${item.size}</span>`
                  : ``
              }
            </div>
          </div>
        </div>
        
        <div class="main__cart__unavailable-items__item__controls__buttons">
          <button>
            <img class="icon" src="./assets/icons/favorite.svg" alt="add to favorite icon">
          </button>
          <button>
            <img class="icon" src="./assets/icons/trash-can.svg" alt="remove icon">
          </button>
        </div>
      </div>`;
  });
};
