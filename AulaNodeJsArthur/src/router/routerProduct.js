const { Router } = require('express');
const routerProduct = Router();

const productController = require('../controller/productController');

routerProduct.post('/', (req,res) => {
    productController.create(req,res)
});

routerProduct.get('/', (req,res) => {
    productController.getAll(req,res);
});

// /api/users/:id => Isso é um modelo de (params)

// api/users?id=3216 => Isto é uma (Query)

// {body: {id: "3212"} } => (Body)

routerProduct.delete('/:id', (req,res) => {
    productController.delete(req,res);
});

routerProduct.put('/:id', (req,res) => {
    productController.update(req,res);
});

routerProduct.get('/:id', (req,res) => {
    productController.getOne(req,res);
});

module.exports = routerProduct;