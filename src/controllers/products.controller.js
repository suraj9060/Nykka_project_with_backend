const express = require('express');

const Product = require('../models/products.model');

const User = require('../models/users.model')
const Cart = require('../models/cart.model')

const crudController = require('./crud.controller')

const router = express.Router()

router.post("", crudController.post(Product))

// router.get("", crudController.get(Product))

router.get("", async (req, res) => {
    const product = await Product.find().lean().exec();

    return res.render('Loreal_paris', {
        product:product
    })
})

//Sorting by Categories

router.get("/category/hair", async (req, res) => {
    const product = await Product.find({category: "hair" }).lean().exec();

    
    return res.render('Loreal_paris', {
        product:product
    })
})


router.get("/category/skin", async (req, res) => {
    const product = await Product.find({category: "skin" }).lean().exec();

    
    return res.render('Loreal_paris', {
        product:product
    })
})


router.get("/category/mekup", async (req, res) => {
    const product = await Product.find({category: "makeup" }).lean().exec();

    
    return res.render('Loreal_paris', {
        product:product
    })
})

router.get("/category/mekup", async (req, res) => {
    const product = await Product.find({category: "men" }).lean().exec();

    
    return res.render('Loreal_paris', {
        product:product
    })
})

//Sorting by Price
router.get("/price0-499", async (req, res) => {
    const product = await Product.find( {$and : [{price:{$lt:500}}, {price:{$gt:0}}]}).sort({"price": 1}).lean().exec();

    
    return res.render('Loreal_paris', {
        product:product
    })
})

router.get("/price500-999", async (req, res) => {
    const product = await Product.find( {$and : [{price:{$lt:999}}, {price:{$gt:500}}]}).sort({"price": 1}).lean().exec();

    
    return res.render('Loreal_paris', {
        product:product
    })
})

router.get("/price1000-5000", async (req, res) => {
    const product = await Product.find( {$and : [{price:{$lt:5000}}, {price:{$gt:1000}}]}).sort({"price": 1}).lean().exec();

    return res.render('Loreal_paris', {
        product:product
    })
})



//routes for Cart

router.get("/:id", async (req, res) => {
    const cart = await Cart.find().lean().exec();
    let id = req.params.id
    cart.push(id)
    const cart1 = await Cart.insertMany({ name: cart });
    console.log(cart);
    
    return res.redirect('/products')
})


module.exports = router;