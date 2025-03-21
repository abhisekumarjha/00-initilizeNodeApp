require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

function greet(name) {
  return `Welcome back ${name}!`;
}

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("twitter/abhishekumarjha");
});

app.get("/h1", (req, res) => {
  res.send("<h1>Hey, I'm h1.</h1>");
});

app.get("/user", (req, res) => {
  res.send(greet("Abhi"));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
