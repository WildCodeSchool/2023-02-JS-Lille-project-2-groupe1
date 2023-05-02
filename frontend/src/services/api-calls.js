function getItems() {
  return fetch("http://localhost:5002/items").then((res) => res.json());
}

export { getItems };
