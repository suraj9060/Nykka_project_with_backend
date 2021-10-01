const mongoose = require('mongoose');

const productController = require('../controllers/products.controller')


const usersSchema = new mongoose.Schema({

    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    mobile: { type: Number, required: true },
    email: { type: String, required: true },
    gender: { type: String, required: true },
    password: { type: String, required: true },
    cart: [{ type: mongoose.Schema.Types.ObjectId, ref: "product", required: true }]
    
},
{
    versionKey: false,
    timestamps: true,
  });

const User = mongoose.model("user", usersSchema);

module.exports = User;



 // address: { type: String, required: true },