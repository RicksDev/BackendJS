const { Router } = require('express');
const routerProduct = Router();

const productController = require('../controller/productController');
const { validateProduct, validateProductID } = require('../middlewares/ValidateProduct');

routerProduct.post('/', validateProduct, (req,res) => {
    productController.create(req,res)
});

routerProduct.get('/', validateProduct, validateProductID, (req,res) => {
    productController.getAll(req,res);
});

// /api/users/:id => Isso é um modelo de (params)

// api/users?id=3216 => Isto é uma (Query)

// {body: {id: "3212"} } => (Body)

routerProduct.delete('/:id', validateProductID, (req,res) => {
    productController.delete(req,res);
});

routerProduct.put('/:id',  validateProduct, validateProductID,(req,res) => {
    productController.update(req,res);
});

routerProduct.get('/:id', validateProductID, (req,res) => {
    productController.getOne(req,res);
});

module.exports = routerProduct;