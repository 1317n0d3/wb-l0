const initAccordion = () => {
  const availableItemsAccordionButton = document.querySelector(
    "#available-items-accordion-button"
  );
  const availableItemsContainer = document.querySelector(
    "#availableItemsContainer"
  );
  const availableItemsCollapsedTitle = document.querySelector(
    ".main__cart__available-items__header__collapsed-title"
  );
  const selectAllCheckbox = document.querySelector("#select-all-checkbox");

  availableItemsAccordionButton.addEventListener("click", () => {
    availableItemsContainer.classList.toggle("hidden");
    availableItemsAccordionButton.classList.toggle("rotated");
    availableItemsCollapsedTitle.classList.toggle("hidden");
    selectAllCheckbox.classList.toggle("hidden");
  });

  const missingItemsAccordionButton = document.querySelector(
    "#missing-items-accordion-button"
  );
  const missingItemsContainer = document.querySelector(
    "#unavailableItemsContainer"
  );

  missingItemsAccordionButton.addEventListener("click", () => {
    missingItemsContainer.classList.toggle("hidden");
    missingItemsAccordionButton.classList.toggle("rotated");
  });
};
