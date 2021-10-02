const express = require("express");
const mongoose = require("mongoose");

const connect = () => {
  console.log("connection successfull");
  return mongoose.connect(
    "mongodb+srv://sagar_krwr:sagar123@cluster0.mguw1.mongodb.net/Nykaa_Database?retryWrites=true&w=majority"
  );
};

const app = express();
app.use(express.json());

app.use(express.urlencoded());

app.set("view engine", "ejs");
app.use(express.static("./public"));

const indexController = require("./controllers/index.controller");
const productController = require("./controllers/products.controller");
const userController = require("./controllers/users.controller");
const cartController = require("./controllers/cart.controller")



app.use("/home", indexController);
app.use("/products", productController);

app.use("/users", userController);


app.use("/home/products", cartController);

app.listen(9696, async function () {
  await connect();
  console.log("listening on port 9696");
});
