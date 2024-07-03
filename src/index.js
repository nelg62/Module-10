const express = require("express");
require("dotenv").config();
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send(
    `Hello World! this is an evironmentvariable: ${process.env.HELLO_WORLD}  this is an environemtn secret: ${process.env.API_SECRET} I am adding things to the Branch`
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
