const express = require('express');

const Product = require('../models/products.model');

const crudController = require('./crud.controller')

const router = express.Router()


router.post("", crudController.post(Product))


router.get("", crudController.post(Product))






module.exports = router;