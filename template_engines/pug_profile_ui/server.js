import express from "express";
let app = express();
app.set("view engine", "pug");
app.set("views", "./views");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send(" this page is working");
});

app.get("/home", (req, res) => {
  let data = {
    name: "Fatima Noor",
    age: "23",
    profession: "Software Developer",
    skill: [" Node.js  |", " Express |", " MongoDB |", "\t EJS"],

    qoutes: "</ coder >",
  };
  res.render("index", data);
});

let port = 7666;
app.listen(port, () => {
  console.log(`server is running https://localhost:${port}`);
});
