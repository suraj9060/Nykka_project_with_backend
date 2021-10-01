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
    return res.render('signin')
});


router.get("/signin/status", async (req, res) => {
    const password = req.body.password;
    const user = await User.find({password: password}).lean().exec();

    if (user === null) {
       return res.status(404).render("not found")
    } else {
       return res.redirect("/home")
    }
    return res.status(201).send({user});
   
})

module.exports = router;