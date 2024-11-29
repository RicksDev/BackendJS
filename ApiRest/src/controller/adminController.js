const administradorService = require('../service/administradoresService');
const adminService = require('../service/administradoresService');

const adminController = {

    login: async (req, res) => {
         // const { email, senha } = req.body;

      const data = {
        email : req.body.email,
        senha : req.body.senha
      }

      const adm = await administradorService.login(data);

    //   if(!adm){
    //     return res.status(500).json({
    //       msg: "login nao encontrado",
    //     });
    //   }

    //   return res.status(200).json({
    //     msg: "Login sucesso",
    //     token : adm
    //   });

      
      if (!adm) {
        return res.status(400).json({
          msg: "E-mail ou senha incorretos!",
        });
      }

      const isValida = await bcrypt.compare(senha, adm.senha);
      if (!isValida) {
        return res.status(400).json({
          msg: "E-mail ou senha incorretos!",
        });
      }

      const token = jwt.sign(
        { email: adm.email, senha: adm.senha },
        process.env.SECRET,
        { expiresIn: "1h" }
      );
      return res.status(200).json({
        msg: "Login realizado",
        token,
      });
    },

    create: async (req, res) => {
        try {
            const admin = await adminService.create(req.body);
            return res.status(200).json({
                msg: 'Administrador criado com sucesso',
                admin
            });
        } catch (error) {
            return res.status(500).json({
                msg: 'Erro ao tentar criar o administrador'
            });
        }
    },

    update: async (req, res) => {
        try {
            const admin = await adminService.update(req.params.id, req.body);
            if (!admin) {
                return res.status(400).json({
                    msg: 'Administrador não encontrado'
                });
            }

            return res.status(200).json({
                msg: 'Administrador atualizado com sucesso!'
            });
        } catch (error) {
            return res.status(500).json({
                msg: 'Erro ao tentar atualizar o administrador'
            });
        }
    },

    getAll: async (req, res) => {
        try {
            const admins = await adminService.getAll();
            if (!admins) {
                return res.status(404).json({
                    msg: 'Nenhum administrador encontrado'
                });
            }
            return res.status(200).json({
                msg: 'Todos os administradores',
                admins
            });
        } catch (error) {
            return res.status(500).json({
                msg: 'Ocorreu um erro no servidor'
            });
        }
    },

    getOne: async (req, res) => {
        try {
            const admin = await adminService.getById(req.params.id);
            if (!admin) {
                return res.status(404).json({
                    msg: 'Administrador não encontrado'
                });
            }

            return res.status(200).json({
                msg: 'Administrador encontrado',
                admin
            });
        } catch (error) {
            return res.status(500).json({
                msg: 'Ocorreu um erro no servidor'
            });
        }
    },

    delete: async (req, res) => {
        try {
            const admin = await adminService.delete(req.params.id);
            if (!admin) {
                return res.status(404).json({
                    msg: 'Administrador não encontrado'
                });
            }

            await admin.destroy();
            return res.status(200).json({
                msg: 'Administrador encontrado e deletado com sucesso!',
                admin
            });
        } catch (error) {
            return res.status(500).json({
                msg: 'Ocorreu um erro no servidor'
            });
        }
    }
};

module.exports = adminController;
