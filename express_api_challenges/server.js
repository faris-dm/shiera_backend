import express from "express";

const app = express();

app.get("/", (req, res) => {
  if (req.url === "/") {
    res.send({ message: "Welcome to Sheira!" });
  }
});

const port = 5000;
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
