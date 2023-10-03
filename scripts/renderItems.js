const renderItems = (items) => {
  const availableItems = items.filter((item) => item.available === true);
  const unavailableItems = items.filter((item) => item.available === false);

  renderAvailableItems(availableItems);
  renderUnavailableItems(unavailableItems);
  initSelectAllMethod(availableItems);
  renderDeliveryDateInfo(availableItems);
};
