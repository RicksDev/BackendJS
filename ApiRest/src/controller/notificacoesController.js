const notificacoesService = require('../service/notificacoesService');

const notificacoesController = {
    create: async (req, res) => {
        try {
            const notificacao = await notificacoesService.create(req.body);
            return res.status(200).json({
                msg: 'Notificação criada com sucesso',
                notificacao
            });
        } catch (error) {
            return res.status(500).json({
                msg: 'Erro ao tentar criar a notificação'
            });
        }
    },

    update: async (req, res) => {
        try {
            const notificacao = await notificacoesService.update(req.params.id, req.body);
            if (!notificacao) {
                return res.status(400).json({
                    msg: 'Notificação não encontrada'
                });
            }

            return res.status(200).json({
                msg: 'Notificação atualizada com sucesso!'
            });
        } catch (error) {
            return res.status(500).json({
                msg: 'Erro ao tentar atualizar a notificação'
            });
        }
    },

    getAll: async (req, res) => {
        try {
            const notificacoes = await notificacoesService.getAll();
            if (!notificacoes) {
                return res.status(404).json({
                    msg: 'Nenhuma notificação encontrada'
                });
            }
            return res.status(200).json({
                msg: 'Todas as notificações',
                notificacoes
            });
        } catch (error) {
            return res.status(500).json({
                msg: 'Ocorreu um erro no servidor'
            });
        }
    },

    getOne: async (req, res) => {
        try {
            const notificacao = await notificacoesService.getById(req.params.id);
            if (!notificacao) {
                return res.status(404).json({
                    msg: 'Notificação não encontrada'
                });
            }

            return res.status(200).json({
                msg: 'Notificação encontrada',
                notificacao
            });
        } catch (error) {
            return res.status(500).json({
                msg: 'Ocorreu um erro no servidor'
            });
        }
    },

    delete: async (req, res) => {
        try {
            const notificacao = await notificacoesService.delete(req.params.id);
            if (!notificacao) {
                return res.status(404).json({
                    msg: 'Notificação não encontrada'
                });
            }

            return res.status(200).json({
                msg: 'Notificação encontrada e deletada com sucesso!',
                notificacao
            });
        } catch (error) {
            return res.status(500).json({
                msg: 'Ocorreu um erro no servidor'
            });
        }
    }
};

module.exports = notificacoesController;
