import express from "express";
const app = express();
const product = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Watch", price: 900 },
  { id: 4, name: "Car", price: 500.0 },
];

app.get("/products", (req, res) => {
  res.send(product);
});

app.get("/products/:id", (req, res) => {
  const onlyProduct = product.find(
    (items) => items.id === parseInt(req.params.id)
  );
  if (!onlyProduct) {
    res.status(404).send("Item does not found");
  }
  res.send(onlyProduct);
});

const port = 7000;
app.listen(port, () => {
  console.log(`http://localhost:7000`);
});
