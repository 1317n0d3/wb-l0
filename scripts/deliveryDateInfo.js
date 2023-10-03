const createDeliveryDate = (deliveryDatesContainer, availableItem, index) => {
  const id = `delivery-date-${
    availableItem.delivery_info[index].date.split(" ")[0]
  }`;
  const itemsContainerId = `delivery-items-${
    availableItem.delivery_info[index].date.split(" ")[0]
  }`;

  const div = document.createElement("div");
  div.className = "main__cart__delivery-method__info__block";
  div.id = id;

  div.innerHTML += `
        <span class="main__cart__delivery-method__info__block__title">${availableItem.delivery_info[index].date}</span>
        <div class="main__cart__delivery-method__info__block__items" id="${itemsContainerId}"></div>`;

  deliveryDatesContainer.appendChild(div);

  return document.querySelector(`#${itemsContainerId}`);
};

const createDeliveryItem = (itemsContainer, image_url, alt, count) => {
  itemsContainer.innerHTML += `
      <div class="icon-counter icon-counter__order">
        <img src="${image_url}" alt="${alt}">
        ${count > 1 ? `<span class="icon-counter__count">${count}</span>` : ``}
      </div>`;
};

const renderDeliveryDateInfo = (availableItems) => {
  const deliveryDatesContainer = document.querySelector(
    "#delivery-dates-container"
  );

  deliveryDatesContainer.innerHTML = ``;

  const selectedItems = availableItems.filter(
    (availableItem) => availableItem.selected === true
  );

  selectedItems.forEach((availableItem) => {
    const id = `delivery-date-${
      availableItem.delivery_info[0].date.split(" ")[0]
    }`;
    const itemsContainerId = `delivery-items-${
      availableItem.delivery_info[0].date.split(" ")[0]
    }`;

    if (!document.querySelector(`#${id}`)) {
      createDeliveryDate(deliveryDatesContainer, availableItem, 0);
    }

    const itemsContainer = document.querySelector(`#${itemsContainerId}`);
    const deliveryCount = availableItem.delivery_info[0].count;
    let remains = availableItem.count - deliveryCount;

    if (remains > 0) {
      createDeliveryItem(
        itemsContainer,
        availableItem.image_url,
        availableItem.title,
        deliveryCount
      );

      const container = createDeliveryDate(
        deliveryDatesContainer,
        availableItem,
        1
      );

      createDeliveryItem(
        container,
        availableItem.image_url,
        availableItem.title,
        remains
      );
    } else {
      createDeliveryItem(
        itemsContainer,
        availableItem.image_url,
        availableItem.title,
        availableItem.count
      );
    }
  });
};
