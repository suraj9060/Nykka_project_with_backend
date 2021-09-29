const express = require('express');

const Product = require('../models/products.model');

const crudController = require('./crud.controller')

const router = express.Router()


router.post("", crudController.post(Product))

// router.get("", crudController.get(Product))

// router.get("", async (req, res) => {
//     // const product = await Product.find().lean().exec();

//     return res.render('index')
// })


router.get("", async (req, res) => {
    const product = await Product.find().lean().exec();

    return res.render('Loreal_paris', {
        product:product
    })
})



module.exports = router;