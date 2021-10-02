const express = require('express');
const router = express.Router();

const Cart = require('../models/cart.model')

router.get("/bag", async (req, res) => {
    const cart = await Cart.find().lean().exec();

    return res.render('L_cart', {
        cart:cart
    });
});
module.exports = router;