import express from "express";
const app = express();
const product = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Watch", price: 900 },
  { id: 4, name: "Car", price: 500.0 },
];
app.get("/", (req, res) => {
  res.send({ message: " welcome to the design page" });
});

app.get("/product", (req, res) => {
  res.send(product);
});

const port = 7000;
app.listen(port, () => {
  console.log(`http://localhost:7000`);
});
