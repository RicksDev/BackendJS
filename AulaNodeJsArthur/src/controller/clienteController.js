const Cliente = require('../models/Cliente');
const { getAll } = require('./userController');
const clienteController = {
    create: async (req,res) => {

        try {
        const { nome, email, cpf, rg, senha } = req.body;

        const clienteCriado = await Cliente.create({ nome, email, cpf, rg, senha });

        return res.status(200).json({
            msg: 'Cliente criado com sucesso!',
            cliente: clienteCriado,
        })
    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: 'Acione o Suporte'});
    }

    },

    update: async (req,res ) => {
        try {
            const { id } = req.params;
            const { nome,email, cpf, rg, senha } = req.body;

            await Cliente.update (
                {
                    nome: nome,
                    email:senha,
                    cpf:cpf,
                    rg:rg,
                    senha:senha,

                },
                {
                    where: { id: id },
                }
            );

            return res.status(200).json({msg: ' Cliente atualizado com sucesso!'});
        } catch (error) {
            console.error(error);
            return res.status(500).json({msg: 'Acione o suporte'});
        }
    } ,
    getAll: async (req, res) => {
        try{
            const clientes = await Cliente.findAll();
            return res.status(200).json({
                msg: 'Clientes encontrados',
                clientes,
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: 'Acione o suporte!'});
        }
    },
    getOne : async (req, res) => {
        try{
        const { id } = req.params;

        const cliente = await Cliente.findByPk(id);

        if(!cliente) {
            return res.status(404).json({
                msg: 'cliente não encontrado'
            });
        }
        return res.status(200),json({msg: 'Cliente encontrado com sucesso'});

        } catch (error) {
            console.error(error);
            return res.status(500).msg({
                msg: 'Acione o suporte!'
            })
        }
    },

    delete: async (req, res) => {
        try {
            const { id } = req.params;

            const cliente = await Cliente.findByPk(id);
            if (!cliente) {
                return res.status(404).json({msg:'Cliente deletado com sucesso!'});
            }

        } catch(error) {

            return res.status(500).json({msg: 'Cliente não pode ser deletado. Tente novamente'});
        }
    }


};

module.exports = clienteController;