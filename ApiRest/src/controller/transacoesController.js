const transacoesService = require('../service/transacoesService');

const transacoesController = {
    create: async (req, res) => {
        try {
            const transacao = await transacoesService.create(req.body);
            return res.status(200).json({
                msg: 'Transação criada com sucesso',
                transacao
            });
        } catch (error) {
            return res.status(500).json({
                msg: 'Erro ao tentar criar a transação'
            });
        }
    },

    update: async (req, res) => {
        try {
            const transacao = await transacoesService.update(req.params.id, req.body);
            if (!transacao) {
                return res.status(400).json({
                    msg: 'Transação não encontrada'
                });
            }

            return res.status(200).json({
                msg: 'Transação atualizada com sucesso!'
            });
        } catch (error) {
            return res.status(500).json({
                msg: 'Erro ao tentar atualizar a transação'
            });
        }
    },

    getAll: async (req, res) => {
        try {
            const transacoes = await transacoesService.getAll();
            if (!transacoes) {
                return res.status(404).json({
                    msg: 'Nenhuma transação encontrada'
                });
            }
            return res.status(200).json({
                msg: 'Todas as transações',
                transacoes
            });
        } catch (error) {
            return res.status(500).json({
                msg: 'Ocorreu um erro no servidor'
            });
        }
    },

    getOne: async (req, res) => {
        try {
            const transacao = await transacoesService.getById(req.params.id);
            if (!transacao) {
                return res.status(404).json({
                    msg: 'Transação não encontrada'
                });
            }

            return res.status(200).json({
                msg: 'Transação encontrada',
                transacao
            });
        } catch (error) {
            return res.status(500).json({
                msg: 'Ocorreu um erro no servidor'
            });
        }
    },

    delete: async (req, res) => {
        try {
            const transacao = await transacoesService.delete(req.params.id);
            if (!transacao) {
                return res.status(404).json({
                    msg: 'Transação não encontrada'
                });
            }

            return res.status(200).json({
                msg: 'Transação encontrada e deletada com sucesso!',
                transacao
            });
        } catch (error) {
            return res.status(500).json({
                msg: 'Ocorreu um erro no servidor'
            });
        }
    }
};

module.exports = transacoesController;
