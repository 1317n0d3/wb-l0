let userItems = [];

async function fetchJSON() {
  const response = await fetch(
    "https://raw.githubusercontent.com/1317n0d3/wb-l0/main/assets/index.json"
  );
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
