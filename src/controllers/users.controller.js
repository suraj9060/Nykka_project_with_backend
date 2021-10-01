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

router.post("/sign/status", async (req, res) => {
    const password = req.body.password;
    const email = req.body.email;
<<<<<<< HEAD
    const user = await User.findOne({ email:email ,password: password}).lean().exec();
    
   
=======
    const user = await User.find({password: password}).lean().exec();

>>>>>>> 27898d754c4da4070531b5c8dfbdb13864b709fa
    if (user === null) {
       return res.status(404).render("error")
    } else {
       return res.redirect("/home")
    }
<<<<<<< HEAD

=======
   
>>>>>>> 27898d754c4da4070531b5c8dfbdb13864b709fa
})

module.exports = router;