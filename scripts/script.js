let userItems = [];

async function fetchJSON() {
  const response = await fetch("http://127.0.0.1:5500/assets/index.json");
  const data = await response.json();
  return data;
}

fetchJSON().then((data) => {
  userItems = data.items;
  renderCart(userItems);
});

const renderCart = (userItems) => {
  renderItems(userItems);
};
