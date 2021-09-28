const express = require('express');
const mongoose = require('mongoose');

const connect = () => {
    return mongoose.connect("mongodb+srv://sagar_krwr:sagar123@cluster0.mguw1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
}


const app = express();
app.use(express.json());



app.listen(9696, async () => {
    await connect();
    console.log("Listening on port 9696");
})