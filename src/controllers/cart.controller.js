const express = require('express');
const router = express.Router();

router.get("/cart", async (req, res) => {
    return res.render('L_cart');
});

module.exports = router;