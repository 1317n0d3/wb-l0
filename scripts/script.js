let userItems = [];

async function fetchJSON() {
  const response = await fetch("http://127.0.0.1:5500/assets/index.json");
  const data = await response.json();
  return data;
}

fetchJSON().then((data) => {
  userItems = data.items;
  console.log(userItems);
  renderCart(userItems);
});

const renderCart = (userItems) => {
  const availableItemsContainer = document.querySelector(
    "#availableItemsContainer"
  );
  userItems.forEach((item) => {
    availableItemsContainer.innerHTML += `
      <div class="main__cart__available-items__item" id="item-card-${item.id}">
        <div class="flex">
          <div class="main__cart__available-items__item__checkbox">
            <input type="checkbox" class="custom-checkbox" name="select-items" id="item-${item.id}">
            <label for="item-${item.id}"></label>
            <img src="${item.image_url}" alt="item photo" class="main__cart__available-items__item__photo">
          </div>
          
          <div class="main__cart__available-items__item__info">
            <span class="main__cart__available-items__item__info__title">${item.title}</span>
          
            <div class="main__cart__available-items__item__info__params">
              <span class="small-text main__cart__available-items__item__info__params__color">Цвет: ${item.color}</span>
              <span class="small-text main__cart__available-items__item__info__params__size">Размер: ${item.size}</span>
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
            <div class="number-input">
              <button class="minus"></button>
              <input type="number" min="1" value="${item.count}" name="quantity" id="quantity-item-${item.id}">
              <button class="plus"></button>
            </div>
            <span class="main__cart__available-items__item__controls__remained small-text red-text">Осталось ${item.remained} шт.</span>
            <div class="main__cart__available-items__item__controls__buttons">
              <button>
                <img class="icon" src="./assets/icons/favorite.svg" alt="add to favorite icon">
              </button>
              <button>
                <img class="icon" src="./assets/icons/trash-can.svg" alt="remove icon">
              </button>
            </div>
          </div>
          <div class="main__cart__available-items__item__price flex-column">
            <div>
              <span class="main__cart__available-items__item__price__new">${item.new_price}</span>
              <span class="main__cart__available-items__item__price__currency">${item.currency}</span>
            </div>
            <span class="main__cart__available-items__item__price__old dashed-gray small-text gray-text">${item.old_price} ${item.currency}</span>
          </div>
        </div>
      </div>`;
  });
};
