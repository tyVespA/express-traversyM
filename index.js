const express = require("express");
const app = express();
// in deployment the PORT number will be in an enviroment variable
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("ABA");
});

app.listen(PORT, () => {
  console.log("Server started on port:", PORT);
});
