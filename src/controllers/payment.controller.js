const express = require('express');
const router = express.Router();


const Cart = require('../models/cart.model')

router.get("/payment", async (req, res) => {
    const cart = await Cart.find().lean().exec();

    return res.render('payment', {
        cart:cart
    });
    
});

module.exports = router;