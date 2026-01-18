import express from "express";
let app = express();
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.send(" this page is working");
});

let port = 7666;
app.listen(port, () => {
  console.log(`server is running https://localhost:${port}`);
});
