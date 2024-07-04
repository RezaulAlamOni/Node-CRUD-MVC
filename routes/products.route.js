const express = require('express');
const  ProductController = require("../controller/products.controller");
const router = express.Router();

// post product create
router.post('/', ProductController.getProducts);

// get all products
router.get('/', ProductController.getProducts);

// get single product
router.get('/:id', ProductController.getSingleProduct);

// update product
router.put('/:id', ProductController.update);

// delete product
router.delete('/:id', ProductController.deleteProduct);

module.exports = router
