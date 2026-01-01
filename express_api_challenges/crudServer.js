import express from "express";

const app = express();
const product = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Airpod", price: 2000 },
  { id: 4, name: "Watch", price: 400 },
  { id: 5, name: "keyboard", price: 7000 },
  { id: 6, name: "jeet", price: 500 },
];

app.use(express.json());
app.get("/products", (req, res) => {
  res.json(product);
});

app.get("/products/:id", (req, res) => {
  const one = product.find((item) => item.id === parseInt(req.params.id));
  if (one) {
    res.send(one);
  } else {
    res.send("Item does not found");
  }
});

app.get("/", (req, res) => {
  res.send({ message: " i am solo" });
});

app.post("/products", (req, res) => {
  let makeArray = Array.isArray(req.body) ? req.body : [req.body];
  let newItem = makeArray.map((item, index) => ({
    id: product.length + index + 1,
    name: item.name,
    price: item.price,
  }));

  product.push(...newItem);

  res.status(201).send(product);
});

app.delete("/products/:id", (req, res) => {
  let removeItem = product.find(
    (items) => items.id === parseInt(req.params.id)
  );
  if (!removeItem) {
    res
      .status(404)
      .send(`Item  with  this id does not  found or incorrect input`);
  } else {
    const findIndex = product.indexOf(removeItem);
    product.splice(findIndex, 1);
  }
  res.send(product);
});

const port = 1000;
app.listen(port, () => {
  console.log(`http://localhost:1000`);
});
