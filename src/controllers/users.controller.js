const express = require('express');

const User = require('../models/users.model')
const crudController = require('./crud.controller')

const router = express.Router()

router.post("/signup/post", crudController.post(User))

router.get("/login", async (req, res) => {
     const user = await User.find().lean().exec();

    return res.render('signup', {
        user:user
    })
});

module.exports = router;