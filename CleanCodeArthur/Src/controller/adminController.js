const Admin = require("../models/admin");
const adminService = require("../services/adminService");
const { update, getAll } = require("./userController");

const adminController = {
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

  delete: async (req,res) => {
    try {
        const admin = await adminService.delete(req.params.id);
        if(!admin) {
            return res.status(404).json({
                msg:'Admin não localizado'
            });
        }

        return res.status(200).json({
            msg:'admin deletado com sucesso!'
        })
    } catch (error) {
        return res.status(500).json({
            msg:'Erro ao deletar usuário'
        });
    }
  }
};

module.exports = adminController;
