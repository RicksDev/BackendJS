const Administrador = require('../model/Administradores');


const administradorService = {
    create: async (administrador) => {
        try {
            return await Administrador.create(administrador);
        } catch (error) {
            throw new Error("Ocorreu um erro ao criar o Administrador!");
            
        }
    },
    update : async (id, administradorToUpdate) => {
        try {
            const administrador = await Administrador.findByPk(id);
            if(!administrador) {
                return null;
            }

            await administrador.update(administradorToUpdate);
            await administrador.save();
            return administrador;
        } catch (error) {
            throw new Error("Ocorreu um erro ao atualizar o Administrador");
            
        }
    },
    getById : async (id) => {
        try {
            const administrador = await Administrador.findByPk(id);
            if(!administrador) {
                return null
            }

            return administrador;
        } catch (error) {
            throw new Error("Ocorreu um erro ao buscar o único Administrador");
            
        }
    },
    getAll : async () => {
        try {
            return await Administrador.findAll();
        } catch (error) {
            throw new Error("Ocorreu um erro ao buscar todos os usuários");
            
        }
    },

    delete: async (id) => {
        try {
            const administrador = await Administrador.findByPk(id);

            if(!administrador) {
                return null;
            }

            return await Administrador.destroy();
        } catch (error) {
            throw new Error("Ocorreu um erro ao deletar o usuário");
            
        }
    }
};

module.exports = administradorService;