const express = require("express");
const bodyParser = require("body-parser");
const mongoPrac = require("./mongoose");

const app = express();

app.use(bodyParser.json());

app.post("/products", mongoPrac.createProduct);

app.get("/products", mongoPrac.getProducts);

app.listen(5000);
