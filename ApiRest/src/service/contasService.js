const Contas = require('../model/Contas');


const contasService = {
    create: async (conta) => {
        try {
            return await Contas.create(conta);
        } catch (error) {
            throw new Error("Ocorreu um erro ao criar o usuário");
            
        }
    },
    update: async (id, contaToUpdate) => {
        try {
            const conta = await Contas.findByPk(id);
            if(!conta) {
                return null;
            }

            await conta.update(contaToUpdate);
            await conta.save();
            return conta;
        } catch (error) {
            throw new Error("Ocorreu um erro ao tentar atualizar a conta");
            
        }
    },
    getById: async (id) => {
        try {
            const conta = await Contas.findByPk(id);
            if(!conta){
                return null;
            }

            return conta;
        } catch (error) {
            throw new Error("Ocorreu um erro ao buscar usuário único");
            
        }
    },
    getAll: async () => {
        try {
            return await Contas.findAll();
        } catch (error) {
            throw new Error("Ocorreu um erro ao buscar todos os usuários");
            
        }
    },
    delete: async (id) => {
        try {
            const conta = await Contas.findByPk(id);
            if(!conta){
                return null;
            }
            return await conta.destroy();
        } catch (error) {
            throw new Error("Ocorreu um erro ao deletar o usuário");
            
        }
    }
};

module.exports = contasService;