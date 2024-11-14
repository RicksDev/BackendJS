const Transacoes = require('../model/Transacoes');


const transacoesService = {
    create: async (transacao) => {
        try {
            return await transacao.create(transacao);
        } catch (error) {
            throw new Error("Ocorreu um erro ao criar o transacao!");
            
        }
    },
    update : async (id, transacaoToUpdate) => {
        try {
            const transacao = await Transacoes.findByPk(id);
            if(!transacao) {
                return null;
            }

            await transacao.update(transacaoToUpdate);
            await transacao.save();
            return transacao;
        } catch (error) {
            throw new Error("Ocorreu um erro ao atualizar o transacao");
            
        }
    },
    getById : async (id) => {
        try {
            const transacao = await Transacoes.findByPk(id);
            if(!transacao) {
                return null
            }

            return transacao;
        } catch (error) {
            throw new Error("Ocorreu um erro ao buscar o único transacao");
            
        }
    },
    getAll : async () => {
        try {
            return await Transacoes.findAll();
        } catch (error) {
            throw new Error("Ocorreu um erro ao buscar todos os usuários");
            
        }
    },

    delete: async (id) => {
        try {
            const transacao = await Transacoes.findByPk(id);

            if(!transacao) {
                return null;
            }

            return await transacao.destroy();
        } catch (error) {
            throw new Error("Ocorreu um erro ao deletar o usuário");
            
        }
    }
};

module.exports = transacoesService;