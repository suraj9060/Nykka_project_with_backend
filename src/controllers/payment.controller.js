const express = require('express');
const router = express.Router();

router.get("/payment", async (req, res) => {
    return res.render('payment');
});

module.exports = router;