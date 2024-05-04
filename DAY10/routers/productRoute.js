const express = require('express');
const productController=require('../controllers/productsController.js');

const productRouter=express.Router();

productRouter.route('/')
    .get(productController.getAllProducts)
    .post(productController.replaceProduct);

productRouter.route('/:id')
    .put(productController.addProduct);

module.exports=productRouter;