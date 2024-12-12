const Administrador = require('../model/Administradores');
const bcrypt = require('bcrypt');
require('dotenv').config();


const administradorService = {
    create: async (administrador) => {
        try {
            const senhaHash = await bcrypt.hash(administrador.senha, 10);
            return await Administrador.create({
                nome: administrador.nome,
                idade: administrador.idade,
                email: administrador.email,
                senha: senhaHash
            });
        } catch (error) {
            throw new Error("Ocorreu um erro ao criar o Administrador!");
            
        }
    },

    login: async ({ email, senha }) => {
        try {
            console.log("Iniciando login com e-mail:", email);

            const administrador = await Administrador.findOne({ where: { email } });
            if (!administrador) {
                console.error("Administrador não encontrado no banco de dados.");
                return null;
            }

            // console.log("Administrador encontrado:", administrador);
            console.log(administrador.senha);
            console.log(senha);

            const isValida = await bcrypt.compare(senha, administrador.senha);
            console.log("Resultado da comparação de senha:", isValida);

            if (!isValida) {
                console.error("Senha incorreta para o e-mail:", email);
                return null;
            }

            return administrador;
        } catch (error) {
            console.error("Erro no login do service:", error);
            throw new Error("Ocorreu um erro ao logar com Administrador!");
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