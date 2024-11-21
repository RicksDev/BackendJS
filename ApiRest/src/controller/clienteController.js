const clienteService = require('../service/clienteService');

const clienteController = {
    create : async (req, res) => {
        try {
            const cliente = await clienteService.create(req.body);
            return res.status(200).json({
                msg:'Cliente criado com o sucesso',
                cliente
            });
        } catch (error) {
            return res.status(500).json({
                msg:'Erro ao tentar criar o cliente'
            })
        }
    },

    update: async (req, res) => {
        try {
            const cliente = await clienteService.update(req.params.id, req.body);
            if(!cliente){
                return res.status(400).json({
                    msg:'Cliente não encontrado'
                });
            }

            return res.status(200).json({
                msg:'Cliente atualizado com sucesso!'
            });
        } catch (error) {
            return res.status(500).json({
                msg:'Erro ao tentar atualizar o cliente'
            })
        }
    },

    getAll: async (req, res) => {
        try {
            const cliente = await  clienteService.getAll();
            if(!cliente){
                return res.status(404).json({
                    msg:'Usuário não encontrado'
                });
            }
            return res.status(200).json({
                msg:'Todos o usuarios!',
                cliente,
            })

        } catch (error) {
            return res.status(500).json({
                msg:'Ocorreu um erro no servidor AAAAAAAA'
            });
        }
    },

    getOne: async (req, res) => {
        try {
            const cliente = await clienteService.getById(req.params.id);
            if(!cliente){
                return res.status(404).json({
                    msg:'Cliente não encontrado'
                })
            };

            return res.status(200).json({
                msg:'Cliente encontrado',
                cliente
            })
        } catch (error) {
            return res.status(500).json({
                msg:'Ocorreu um erro no servidor AAAAAAAA'
            });
        }
    },

    delete: async (req, res) => {
        try {
            const cliente = await clienteService.delete(req.params.id);
            if(!cliente){
                return res.status(404).json({
                    msg:'Cliente não encontrado'
                })
            };

            return res.status(200).json({
                msg:'Cliente encontrado e deletado com sucesso!',
                cliente
            })
        } catch (error) {
            return res.status(500).json({
                msg:'Ocorreu um erro no servidor AAAAAAAA'
            });
        }
    }

};

module.exports = clienteController;