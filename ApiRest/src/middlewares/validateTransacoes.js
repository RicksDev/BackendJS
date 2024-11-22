const validateTransacoes = (req, res, next) => {
    const { idConta, tipo, tipoTransacao, valor, dataTransacao } = req.body;

    if (!idConta || typeof idConta !== 'number') {
        return res.status(400).json({
            msg: 'Campo idConta inválido'
        });
    }

    if (!tipo || typeof tipo !== 'string') {
        return res.status(400).json({
            msg: 'Campo tipo inválido'
        });
    }

    if (!tipoTransacao || typeof tipoTransacao !== 'string') {
        return res.status(400).json({
            msg: 'Campo tipoTransacao inválido'
        });
    }

    if (valor === undefined || typeof valor !== 'number' || valor <= 0) {
        return res.status(400).json({
            msg: 'Campo valor inválido. Deve ser um número maior que zero'
        });
    }

    if (!dataTransacao || typeof dataTransacao !== 'string') {
        return res.status(400).json({
            msg: 'Campo dataTransacao inválido'
        });
    }

    next();
};

const validateTransacoesId = (req, res, next) => {
    const { id } = req.params;

    if (!id || typeof id !== 'string') {
        return res.status(400).json({
            msg: 'Parâmetro ID inválido'
        });
    }

    next();
};

module.exports = { validateTransacoes, validateTransacoesId };
