const { create } = require("./userController");
const Product = require('../models/Product');

const productController = {

    create: async (req,res)  => {
        try {
            const { nome, preco, quantidade } = req.body;

            const productCriado = await Product.create({ nome, preco, quantidade });

            return res.status(200).json({
                msg: 'Product criado com sucesso',
                product: productCriado,
            });

        } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: "Acione o Suporte" });
        }
    },

    update: async (req,res) => {
        try{
             const { id } = req.params;
             const { nome, preco, quantidade } = req.body;

             await Product.update(
                {
                    nome:nome,
                    preco:preco,
                    quantidade:quantidade
                },
                {
                    where: { id:id },
                }
             );

             return res.status(200).json({
                msg: 'Produto atualizado com sucesso'
             })

        } catch (error) {

            console.log(error);
            return res.status(500).json({msg: 'Erro ao atuaizar o produto'});
        }


    },
    getAll: async (req,res) => {
        try {
            const products = await Product.findAll();
            return res.status(200).json({
                msg:'Produtos encontrados',
                products,
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: 'Acione o suporte'});
        }

    },

    getOne: async (req,res) => {
        try{
            const { id } = req.params;

            const product = await Product.findByPk(id);

            if (!product) {
                return res.status(404).json({msg: 'Produto não encontrado'});
            }

            return res.status(200).json({msg: "Produto encontrado com sucesso!",
                product:product,
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: 'PRoduto não encontrado'});
        }
    },

    delete: async (req,res) => {
        try{

            const { id } = req.params;
            const product = await Product.findByPk(id);
            if(!product) {
                return res.status(404).json({ msg: 'Produto não encontrado'});

            }
            await product.destroy();

            return res.status(200).json({msg: "Produto deletado com sucesso!"});
        } catch (error) {
            console.error(error);

            return res.status(500).json({msg: 'Acione o suporte!'});
        }
    }


};

module.exports = productController;