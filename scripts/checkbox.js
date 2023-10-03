const setChecked = (availableItems, checkbox, isChecked) => {
  const id = checkbox.id.split("-")[1];
  const item = availableItems.find((availableItem) => availableItem.id === id);
  checkbox.checked = isChecked;
  item.selected = isChecked;

  setTotalPrice(availableItems, "сом");

  renderDeliveryDateInfo(availableItems);
};

const isAllChecked = (checkboxes) => {
  let allChecked = true;
  checkboxes.forEach((checkbox) => {
    allChecked = allChecked && checkbox.checked;
  });

  return allChecked;
};

const initSelectAllMethod = (availableItems) => {
  const checkboxes = document.getElementsByName("select-items");
  const selectAllCheckbox = document.querySelector("#select-all");
  selectAllCheckbox.checked = true;

  selectAllCheckbox.addEventListener("click", () => {
    if (selectAllCheckbox.checked) {
      checkboxes.forEach((checkbox) => {
        setChecked(availableItems, checkbox, true);
      });
    } else {
      checkboxes.forEach((checkbox) => {
        setChecked(availableItems, checkbox, false);
      });
    }
  });

  checkboxes.forEach((checkbox) => {
    checkbox.checked = true;
    checkbox.addEventListener("click", () => {
      if (checkbox.checked) {
        setChecked(availableItems, checkbox, true);
      } else {
        selectAllCheckbox.checked = false;
        setChecked(availableItems, checkbox, false);
      }

      if (isAllChecked(checkboxes)) {
        selectAllCheckbox.checked = true;
      }
    });
  });
};
