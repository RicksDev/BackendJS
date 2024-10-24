const Admin = require('../models/admin');
const { getById } = require('./userService');
const jwt = require('jsonwebtoken');

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
    getAll: async () => {
        try{
            return await Admin.findAll();
          
        } catch (error) {
            throw new Error('Ocorreu um erro ao criar Admin');
        }
    },
    delete: async (id) => {
        try{
            const admin = await Admin.findByPk(id);
            if(!admin) {
                return null;
            }
            await admin.destroy();
            return admin;
        } catch(error) {
            throw new Error('Ocorreu um erro ao deletar o user');
        }
    },
    login : async (data) => {
        try {
            const adm = await Admin.findOne({
                where : {
                    email : data.email,
                    senha : data.senha
                }
            })

            if(!adm){
                return null
            }

            const token = jwt.sign({
                email : data.email,
                id : data.id
            }, process.env.SECRET, {expiresIn : '1h'})

            return token
        } catch (error) {
            console.error(error);
            throw new Error('Ocorreu um erro ao fazer login');
        }
    }
};

module.exports = adminService;