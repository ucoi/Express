const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("./Public"));

app.all("*", (req, res) => {
  res.status(404).send("<h1>Resource not found</h1>");
});
app.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
