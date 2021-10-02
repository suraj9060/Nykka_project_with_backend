const express = require('express');

const router = express.Router();

const userController = require("../controllers/users.controller");


router.get("", async (req, res) => {
    
    return res.render("index", {
        name:""
    })
})

module.exports = router;