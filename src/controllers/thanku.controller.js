const express = require('express');



const router = express.Router()

router.get("/thankyou", async (req, res) => {
    return res.render('thankyou')
});


module.exports = router; 