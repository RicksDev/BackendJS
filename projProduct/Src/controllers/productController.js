const productRepository = require('../services/productRepository');

// O async => que ele vai executar o processo até o final independente do que acontecer.
exports.getAllProducts = async (req,res) => {
    try {
        //Quando tem o async, ele deve trabalhar dentro de um período.
        const products = await productRepository.getAllProducts();
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({error: err.toString()});
    }
};

exports.getProductById = async (req, res) => {
    try {
        const product = await productRepository.getProductById(req.params.id);
        if(!product) {
            res.status(404).json({error: 'Produto não encontrado'});
        } else {
            res.status(200).json(product);
        }
    } catch (err) {
        res.status(500).json({error:err.toString()});
    }
};

exports.createProduct = async (req,res) => {
    try {
        const product = await productRepository.createProduct(req.body);
        res.status(201).json(product);
    } catch(err) {
        res.status(500).json({error: err.toString()});
    }
};

exports.updateProduct = async (req, res) => {
    try {
        const product = await productRepository.updateProduct(req.params.id, req.body);
        if(!product) {
            res.status(404).json({error: 'Produto não encontrado'});
        } else {
            res.status(200).json(product);
        }
    } catch (err) {
        res.status(500).json({error:err.toString()});
    }
};

exports.deleteProduct = async (req, res) => {
    try{
        const product = await productRepository.deleteProduct(req.params.id);
        if(!product) {
            res.status(404).json({error: 'Produto não encontrado'});
        } else {
            res.status(200).json({msg : 'Produto deletado com sucesso'});
        }
    } catch(err) {
        res.status(500).json({json:err.toString()});

    }
};