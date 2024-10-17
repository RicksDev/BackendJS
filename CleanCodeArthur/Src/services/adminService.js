const Admin = require('../models/admin');
const { getById } = require('./userService');

const adminService = {
    create: async (admin) => {
        try{
            return await Admin.create(admin)
        } catch (error) {
            throw new Error('Ocorreu um erro ao criar Admin');
        }
    },

    update: async (id, adminToUpdate) => {
        try{
            const admin = await Admin.findByPk(id);

            if(!admin) {
                return null;
            }

            await admin.update(adminToUpdate);
            await admin.save();
            return admin;

        } catch (error) {
            throw new Error('Ocorreu um erro ao atualizar Admin');
        }
    },
    getById : async (id) => {
        try{
            const admin = await Admin.findByPk(id);
            if(!admin) {
                return null;
            }
            return admin;
        } catch (error) {
            throw new Error('Ocorreu um erro ao buscar único Admin');
        }
    },
    getAll: async (id) => {
        try{
            const admin = await Admin.findByPk(id);
            if(!admin) {
                return null;
            }
        } catch (error) {
            throw new Error('Ocorreu um erro ao criar Admin');
        }
    },
    delete: async (id) => {
        try{
            const admin = await User.findByPk(id);
            if(!admin) {
                return null;
            }
            await admin.destroy();
            return admin;
        } catch(error) {
            throw new Error('Ocorreu um erro ao deletar o user');
        }
    }
};

module.exports = adminService;