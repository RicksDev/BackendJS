const contaService = require('../service/contasService');

const contaController = {
    create: async (req, res) => {
        try {
            const conta = await contaService.create(req.body);
            return res.status(200).json({
                msg: 'Conta criada com sucesso',
                conta
            });
        } catch (error) {
            return res.status(500).json({
                msg: 'Erro ao tentar criar a conta'
            });
        }
    },

    update: async (req, res) => {
        try {
            const conta = await contaService.update(req.params.id, req.body);
            if (!conta) {
                return res.status(400).json({
                    msg: 'Conta não encontrada'
                });
            }

            return res.status(200).json({
                msg: 'Conta atualizada com sucesso!'
            });
        } catch (error) {
            return res.status(500).json({
                msg: 'Erro ao tentar atualizar a conta'
            });
        }
    },

    getAll: async (req, res) => {
        try {
            const contas = await contaService.getAll();
            if (!contas) {
                return res.status(404).json({
                    msg: 'Nenhuma conta encontrada'
                });
            }
            return res.status(200).json({
                msg: 'Todas as contas',
                contas
            });
        } catch (error) {
            return res.status(500).json({
                msg: 'Ocorreu um erro no servidor'
            });
        }
    },

    getOne: async (req, res) => {
        try {
            const conta = await contaService.getById(req.params.id);
            if (!conta) {
                return res.status(404).json({
                    msg: 'Conta não encontrada'
                });
            }

            return res.status(200).json({
                msg: 'Conta encontrada',
                conta
            });
        } catch (error) {
            return res.status(500).json({
                msg: 'Ocorreu um erro no servidor'
            });
        }
    },

    delete: async (req, res) => {
        try {
            const conta = await contaService.delete(req.params.id);
            if (!conta) {
                return res.status(404).json({
                    msg: 'Conta não encontrada'
                });
            }

            return res.status(200).json({
                msg: 'Conta encontrada e deletada com sucesso!',
                conta
            });
        } catch (error) {
            return res.status(500).json({
                msg: 'Ocorreu um erro no servidor'
            });
        }
    }
};

module.exports = contaController;
