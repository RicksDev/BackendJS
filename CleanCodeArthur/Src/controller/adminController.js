const Admin = require("../models/admin");
const adminService = require("../services/adminService");

const adminController = {
  login: async (req, res) => {
    try {
      // const { email, senha } = req.body;

      const data = {
        email : req.body.email,
        senha : req.body.senha
      }

      const adm = await adminService.login(data);

      if(!adm){
        return res.status(500).json({
          msg: "login nao encontrado",
        });
      }

      return res.status(200).json({
        msg: "Login sucesso",
        token : adm
      });

      

      // if (!admin) {
      //   return res.status(400).json({
      //     msg: "E-mail ou senha incorretos!",
      //   });
      // }

      // const isValida = await bcrypt.compare(senha, admin.senha);
      // if (!isValida) {
      //   return res.status(400).json({
      //     msg: "E-mail ou senha incorretos!",
      //   });
      // }

      // const token = jwt.sign(
      //   { email: admin.email, senha: admin.senha },
      //   process.env.SECRET,
      //   { expiresIn: "1h" }
      // );
      // return res.status(200).json({
      //   msg: "Login realizado",
      //   token,
      // });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: "Acione o suporte" });
    }
  },
  create: async (req, res) => {
    try {
      const admin = await adminService.create(req.body);
      return res.status(200).json({
        msg: "Admin criado com sucesso!",
      });
    } catch (error) {
      return res.status(500).json({
        msg: "Erro ao criar admin",
      });
    }
  },
  update: async (req, res) => {
    try {
      const admin = await adminService.update(req.body, req.params.id);

      if (!admin) {
        return res.status(404).json({
          msg: "Admin não encontrado.",
        });
      }

      return res.status(200).json({
        msg: "Admin atualizado com sucesso!",
      });
    } catch (error) {
      return res.status(500).json({
        msg: "Erro ao atualizar admin",
      });
    }
  },

  getAll: async (req, res) => {
    try {
      const admin = await adminService.getAll();

      if (!admin) {
        return res.status(404).json({
          msg: "Admins não localizados.",
        });
      }

      return res.status(200).json({
        msg: "Admins encontrados",
        admin,
      });
    } catch (error) {
      return res.status(500).json({
        msg: "Erro ao deletar admin",
      });
    }
  },

  getoOne: async (req, res) => {
    try {
      const admin = await adminService.getById(req.params.id);
      if (!admin) {
        return res.status(404).json({
          msg: "Admin não localizado",
        });
      }

      return res.status(200).json({
        msg: "Admin encontrado",
        admin,
      });
    } catch (error) {
      return res.status(500).json({
        msg: "Erro ao buscar Admin único.",
      });
    }
  },

  delete: async (req, res) => {
    try {
      const admin = await adminService.delete(req.params.id);
      if (!admin) {
        return res.status(404).json({
          msg: "Admin não localizado",
        });
      }

      return res.status(200).json({
        msg: "admin deletado com sucesso!",
      });
    } catch (error) {
      return res.status(500).json({
        msg: "Erro ao deletar usuário",
      });
    }
  },
};

module.exports = adminController;
