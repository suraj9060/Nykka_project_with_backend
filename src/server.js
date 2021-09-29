const express = require('express');
const mongoose = require('mongoose');

const connect = () => {
    console.log("connection successfull");
    return mongoose.connect("mongodb+srv://sagar_krwr:sagar123@cluster0.mguw1.mongodb.net/Nykaa_Database?retryWrites=true&w=majority")
}


const app = express();
app.use(express.json());

app.set('view engine', 'ejs')


const productController = require('./controllers/products.controller')


app.use("/products" , productController)



app.listen(9696, async function () {

    await connect();
    console.log("listening on port 9696");
})