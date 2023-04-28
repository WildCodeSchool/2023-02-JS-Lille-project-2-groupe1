function getItems() {
  return fetch("http://localhost:5000/items").then((res) => res.json());
}

export { getItems };
