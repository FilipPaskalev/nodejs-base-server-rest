var express = require("express");
var app = express();

app.listen(1951822518, () => {
  console.log("Server running on port 1951822518");
});

app.get("/url", (req, res, next) => {
  res.json(["One", "Lisa", "Two", "Some random things", "More things"]);
});
