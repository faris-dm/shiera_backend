import express from "express";

let app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.get("/", (req, res) => {
  const hannsInfo = {
    name: "Fatima Noor",
    age: "23",
    profession: "Software Developer",
    skill: [" Node.js  |", " Express |", " MongoDB |", "\t EJS"],
    goal: "to be married  and  have  a family",
    img: "images",
    qoutes: "</ coder >",
  };
  res.render("hello", { hannsInfo });
});

let port = 5200;
app.listen(port, (req, res) => {
  console.log(`https://localhost:${port}`);
});
