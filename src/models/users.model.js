const mongoose = require('mongoose');

const Product = require("./products.model");

const usersSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    phone_number: { type: Number, required: true },
    email: { type: String, required: true },
    gender: { type: String, required: true },
    password: { type: String, required: true },
    address: { type: String, required: true },
    product_id: [{type: mongoose.Schema.Types.ObjectId, ref: "product", required: false }]
    
});

const User = mongoose.model("user", usersSchema);

module.exports = User;