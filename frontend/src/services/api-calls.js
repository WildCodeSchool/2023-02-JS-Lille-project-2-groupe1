function getItems() {
  return fetch("http://localhost:5000/items", {
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
}

export { getItems };
