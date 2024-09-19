const validateEvento = (req, res, next) => {
    const { nome, data, localizacao } = req.body;

    if(!nome || !data || !localizacao) {
        return res.status(404).json({
            msg:'Campos inválidos, revise por favor.'
        });
    }
    return next();
};

const validateEventoId = (req, res, next) => {
    const { id } = req.params;

    if(!id) {
        return res.status(404).json({
            msg:'Parâmetro faltando.'
        })
    }
    return next();
};

module.exports = {validateEvento, validateEventoId};