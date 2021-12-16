const express = require('express');
const router = express.Router();

const Cart = require('../models/cart.model')

router.get("/address", async (req, res) => {
    const cart = await Cart.find().lean().exec();

    return res.render('address', {
        cart:cart
    });

});

module.exports = router;