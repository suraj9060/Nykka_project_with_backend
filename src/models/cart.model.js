const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    name:"",
    price:"",
    image:""
})

const Cart = mongoose.model("cart", cartSchema);

module.exports = Cart;


