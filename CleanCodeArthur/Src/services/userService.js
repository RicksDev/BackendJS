const User = require('../models/user');


//app.js -> router.js -> UserRouter.js -> userController
//-> userService.js -> model -> Database
const userService = {
    create: async (user) => {
        try {
            return await User.create(user);
        } catch(error) {
            throw new Error('Ocorreu um erro ao Criar User')
        }
    },
    update: async(id, userToUpdate) => {
        try {
            const user = await User.findByPk(id);
            if(!user) { //Se for vazioi
                return null;
            }

            await user.update(userToUpdate);
            await user.save();
            return user;
        } catch (error) {
            throw new Error('Ocorreu um erro ao Atualizar o User')
        }
    },
    getById : async (id) => {
        try {
            const user = await User.findByPk(id);
            if(!user) {
                return null;
            }
            return user;
        } catch (error) {
            throw new Error('Ocorreu um erro ao buscar o único user')
        }
    },
    getAll : async () => {
        try {
            return await User.findAll();
        } catch (error) {
            throw new Error('Ocorreu um erro ao deletar o User');
        }
    },
    delete: async (id) => {
        try{

            const user = await User.findByPk(id);
        
            if(!user) {
                return null;
            }
            return  await user.destroy();
        } catch(error) {
            throw new Error('Ocorreu um erro ao deletar o user');
        }
    }
}

module.exports = userService;