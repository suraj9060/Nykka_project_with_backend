const express = require('express');



const router = express.Router()

router.get("/address", async (req, res) => {
    return res.render('address')
});


module.exports = router;    
