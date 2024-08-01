//Onde irão ficar as principais configurações do nosso usuário

const userController = {
  //async quando vai demorar mais que o normal, usamos o await para esperar essa função. O Await precisa o async e vice-versa.

  create: async (req, res) => {
    try {
      //formulário com method POST
      const { nome, idade, senha, email } = req.body;

      console.log({ nome, idade, senha, email });

      return res.status(200).json({ msg: "Usuário criado com sucesso!!" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o Suporte" });
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      //formulário com method POST
      const { nome, idade, senha, email } = req.body;

      console.log("Atualizando o objeto!!");
      console.log({ id });
      console.log({ nome, idade, senha, email });

      return res.status(200).json({ msg: "Usuário atualizado com sucesso!!" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o Suporte" });
    }
  },
  getAll: async (req, res) => {
    try {
      return res
        .status(200)
        .json({ msg: "Usuário encontrados!", usuarios: [] });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o Suporte" });
    }
  },
  getOne: async (req, res) => {
    try {
      return res
        .status(200)
        .json({ msg: "Usuário encontrado com sucesso!", usuario: {} });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o Suporte" });
    }
  },
  delete: async (req, res) => {
    try {

        return res.status(200).json({msg: 'Usuário deletado com sucesso!'});
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o Suporte" });
    }
  },
};

module.exports = userController;
