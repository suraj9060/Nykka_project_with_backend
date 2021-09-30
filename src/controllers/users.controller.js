const express = require('express');

const User = require('../models/users.model')

const router = express.Router()


router.get("/login", async (req, res) => {
     const user = await User.find().lean().exec();

    return res.render('login1', {
        user:user
    })
});

module.exports = router;