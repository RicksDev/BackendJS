const validateParticipantes = (req, res, next) => {
    const { nome,email, eventoId } = req.body;

    if(!nome || !email || !eventoId) {
        return res.status(404).json({
            msg:"Campos inválidos. Revise por favor!"
        })
    }
    return next();
};

const validateParticipantesId = (req, res, next) => {

    const { id } = req.params

    if(!id) {
        return res.status(400).json({
            msg: 'Parâmetro faltando'
        })
    };

    return next();
};

module.exports = {validateParticipantes,validateParticipantesId}