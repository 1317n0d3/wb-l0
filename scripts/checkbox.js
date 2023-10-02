const isAllChecked = (checkboxes) => {
  let allChecked = true;
  checkboxes.forEach((checkbox) => {
    allChecked = allChecked && checkbox.checked;
  });

  return allChecked;
};

const initSelectAllMethod = () => {
  const checkboxes = document.getElementsByName("select-items");
  const selectAllCheckbox = document.querySelector("#select-all");
  selectAllCheckbox.checked = true;

  selectAllCheckbox.addEventListener("click", () => {
    if (selectAllCheckbox.checked) {
      checkboxes.forEach((checkbox) => {
        checkbox.checked = true;
      });
    } else {
      checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
      });
    }
  });

  checkboxes.forEach((checkbox) => {
    checkbox.checked = true;
    checkbox.addEventListener("click", () => {
      if (!checkbox.checked) {
        selectAllCheckbox.checked = false;
      }

      if (isAllChecked(checkboxes)) {
        selectAllCheckbox.checked = true;
      }
    });
  });
};
