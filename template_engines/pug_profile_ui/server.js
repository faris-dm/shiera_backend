import express from "express";
let app = express();
app.set("view engine", "pug");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send(" this page is working");
});

app.get("/home", (req, res) => {
  let data = {
    message: "hello solo from your Fam",
    reality: " you are alone and have you enjoy your life",
  };
  res.render("index", data);
});

let port = 7666;
app.listen(port, () => {
  console.log(`server is running https://localhost:${port}`);
});
