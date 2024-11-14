const Cliente = require('../model/Cliente');


const clienteService = {
    create: async (cliente) => {
        try {
            return await Cliente.create(cliente);
        } catch (error) {
            throw new Error("Ocorreu um erro ao criar o cliente!");
            
        }
    },
    update : async (id, clienteToUpdate) => {
        try {
            const cliente = await Cliente.findByPk(id);
            if(!cliente) {
                return null;
            }

            await cliente.update(clienteToUpdate);
            await cliente.save();
            return cliente;
        } catch (error) {
            throw new Error("Ocorreu um erro ao atualizar o cliente");
            
        }
    },
    getById : async (id) => {
        try {
            const cliente = await Cliente.findByPk(id);
            if(!cliente) {
                return null
            }

            return cliente;
        } catch (error) {
            throw new Error("Ocorreu um erro ao buscar o único Cliente");
            
        }
    },
    getAll : async () => {
        try {
            return await Cliente.findAll();
        } catch (error) {
            throw new Error("Ocorreu um erro ao buscar todos os usuários");
            
        }
    },

    delete: async (id) => {
        try {
            const cliente = await Cliente.findByPk(id);

            if(!cliente) {
                return null;
            }

            return await cliente.destroy();
        } catch (error) {
            throw new Error("Ocorreu um erro ao deletar o usuário");
            
        }
    }
};

module.exports = clienteService;