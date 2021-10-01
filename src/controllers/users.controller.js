const express = require('express');

const User = require('../models/users.model')

const router = express.Router()

router.post("/post", async (req , res ) => {
    const user  = await User.create(req.body);
    
    res.redirect("/home")
    return res.status(201).send({user});

})

router.get("/signup", async (req, res) => {
    return res.render('signup')
});


router.get("/signin", async (req, res) => {
    const user = await User.find({password: "1234"}).lean().exec();

    return res.status(201).send({user});
    // return res.render('signin', {
    //     user:user
    // })
})

module.exports = router;