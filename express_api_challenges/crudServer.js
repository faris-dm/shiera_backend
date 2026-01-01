import express from "express";

const app = express();

const product = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Airpod", price: 2000 },
  { id: 4, name: "Watch", price: 500 },
  { id: 5, name: "keyboard", price: 1000 },
  { id: 6, name: "jeet", price: 500 },
];

app.get("/products", (req, res, eror) => {
  if (eror) {
    res.status(404).send("Unknow Page");
  } else {
    res.send(product);
  }
});

const port = 9000;

app.listen(port, (req, res) => {
  console.log(`http://localhost:9000`);
});
