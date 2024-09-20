const Participantes = require('../model/Participantes');
const participantesController = {

    create: async (req, res) => {
        try{

            const { nome, email, eventoId } = req.body;
    
            const participanteCriado = await Participantes.create({ nome, email, eventoId });
    
            return res.status(200).json({
                msg:'Participante criado com sucesso!',
                participante: participanteCriado
            })
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                msg:'Erro ao criar Participante! Tente novamente.'
            })
        }
    },

    update: async (req, res) => {
        try {
            const { id } = req.params;
            const { nome, email, eventoId } = req.body;
            await Participantes.update(
                {
                    nome:nome,
                    email:email,
                    eventoId:eventoId
                },
                {
                    where: { id: id }
                }
            );
            return res.status(200).json({
                msg:'Participantes atualizado com sucesso!'
            })
        } catch(error) {
            console.error(error);

            return res.status(500).json({
                msg:'Erro ao atualizar participante.'
            });
        }
    },

    getAll : async (req, res) => {
        try {

            const participantes = await Participantes.findAll();

            return res.status(200).json({
                msg:'Participantes encontrados!',
                participantes
            })
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                msg:'Erro ao buscar todos os participantes.'
            });
        }
    },
    getOne: async (req, res) => {
        try {

            const { id } = req.params;
            const participante = await Participantes.findByPk(id);
            if(!participante){
                return res.status(404).json({
                    msg:'Participante naõ encontrado. Tente novamente!'
                });
            }
            return res.status(200).json({
                msg:'Participante encontrado'
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                msg:'Erro ao buscar participante.'
            })
        }
    },

    delete: async (req, res) => {
        try{
            const { id } = req.params;

            const participante = await Participantes.findByPk(id);
    
            if(!participante) {
                return res.status(404).json({
                    msg:'Participante não encontrado'
                });
            }

            await participante.destroy();
            return res.status(200).json({
                msg:'Participante deletado com sucesso!'
            });
        } catch (error){
            console.error(error);
            return res.status(500).json({
               msg: 'Acione o suporte'
            });
        }
    }

};

module.exports = participantesController;