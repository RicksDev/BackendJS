const Notificacoes = require('../model/Notificacoes');

const notificacoesService = {
    create: async(notificacao) => {
        try {
            return await Notificacoes.create(notificacao);

        } catch (error) {
            throw new Error("Ocorreu um erro ao criar a notificação");
            
        }
    },
    update: async (id, notificacoesToUpdate) => {
        try {
            const notificacao = await Notificacoes.findByPk(id);
            if(!notificacao) {
                return null;
            }
            await notificacao.update(notificacoesToUpdate);
            await notificacao.save();
            return notificacao;
        } catch (error) {
            throw new Error("Ocorreu um erro ao atualizar a notificação");
            
        }
    },
    getById: async (id) => {
        try {
            const notificacao = await Notificacoes.findByPk(id);
            if(!notificacao){
                return null;
            }

            return notificacao;
        } catch (error) {
            throw new Error("Ocorreu um erro ao buscar a notificação única");
            
        }
    },
    getAll: async () => {
        try {
            const notificacoes = await Notificacoes.findAll();
            if(!notificacoes){
                console.log('Não tem noficações para mostrar')
            }

            return notificacoes;
        } catch (error) {
            throw new Error("Ocorreu um erro ao buscar todas as notificações");
            
        }
    },
    delete: async (id) => {
        try {
            const notificacao = await Notificacoes.findByPk(id);
            if(!notificacao){
                return null;
            }
            return await notificacao.destroy();
        } catch (error) {
            throw new Error("Ocorreu um erro ao deletar a notificação");
            
        }
    }
};

module.exports = notificacoesService;