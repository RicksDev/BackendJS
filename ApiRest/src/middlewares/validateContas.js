const validateContas = (req, res, next) => {
    const { idCliente } = req.body;

    if (!idCliente || typeof idCliente !== 'number') {
        return res.status(400).json({
            msg: 'Campo idCliente inválido'
        });
    }

    next();
};

const validateContasId = (req, res, next) => {
    const { id } = req.params;

    if (!id || typeof id !== 'string') {
        return res.status(400).json({
            msg: 'Parâmetro ID inválido'
        });
    }

    next();
};

module.exports = { validateContas, validateContasId };
