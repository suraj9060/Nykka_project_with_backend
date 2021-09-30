const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: {type: String, required: true},
    phone_number: { type: Number, required: true },
    email: {type: String, required: true},
    gender: { type: String, required: true },
    product_id: { type: Number, required: true },
});


const User = mongoose.model("user", usersSchema);

module.exports = User;