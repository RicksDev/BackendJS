const Evento = require("../model/Evento");
const Participantes = require("../model/Participantes");
const { getAll } = require("./ParticipantesController");

const EventoController = {
  create: async (req, res) => {
    try {
      const { nome, data, localizacao } = req.body;

      const EventoCriado = await Evento.create({ nome, data, localizacao });

      return res.status(200).json({
        msg: "Evento criado!!", evento: EventoCriado });

    } catch (error) {
      console.error(error);
      return res.status(500).json({
        msg: "Erro ao criar evento. Tente novamente!",
      });
    }
  },

  update: async (req, res) => {

    try {
        const { id } = req.params;
        const { nome, data, localizacao } = req.body;

        await Evento.update(
            {
                nome: nome,
                data: data,
                localizacao: localizacao
            },
            {
                where: { id:id }
            }
        );

        return res.status(200).json({
            msg:'Evento atualizado com sucesso!'
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg:'Erro ao atualizar evento! Tente novamente.'
        })

    }
  },
  getAll : async (req,res) => {
    try {
        const eventos = await Evento.findAll();
    
            return res.status(200).json({
                msg:'Eventos encontrados',
                eventos,
            });
    } catch (error)  {
        console.error(error);
        return res.status(500).json({
            msg:'Erro ao buscar todos os eventos.'
        })
    }
  },

  getOne : async (req, res) => {
    try {

        const { id } = req.params;

        const evento = await Evento.findByPk(id);

        if(!evento){
            return res.status(404).json({
                msg:'Evento não encontrado'
            })
        }
        return res.status(200).json({
            msg:'Evento encontrado com sucesso!'
        })
    } catch(error) {
        console.error(error);
        return res.status(500).json({
            msg:'Evento não encontrado'
        })
    }
  },

  delete: async (req, res) => {
    try {
        const { id } = req.params;
        const evento = await Evento.findByPk(id);

        if(!evento) {
            return res.status(404).json({
                msg:'Evento não encontrado'
            })
        }
        await evento.destroy();
        return res.status(200).json({
            msg:'Evento deletado com sucesso'
        })

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            msg: 'Acione o suporte'
        })
    }
  },
  
  getEvents : async ( req, res ) => {
    try {   
        const { id } = req.params;

        const participantes = await Participantes.findAll( { 
            where: {eventoId : id}
        });

        if (!participantes) {
            return res.status(404).json({
                msg:'Não possui participantes escritos no evento'
            })
        };
        return res.status(200).json({
            participantes
        })
        
    } catch (error) {
        return res.status(404).json({
            msg:'Erro ao buscar participante do evento específico'
        })
    }
}
};

module.exports = EventoController;
