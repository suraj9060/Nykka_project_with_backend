const mongoose = require('mongoose');

const Product = require("./products.model");

const usersSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    phone_number: { type: Number, required: true },
    email: { type: String, required: true },
    gender: { type: String, required: true },
    product_id: { type: Number, required: false },
    password: { type: String, required: true },
    address: { type: String, required: true },
});

const User = mongoose.model("user", usersSchema);

module.exports = User;