const validateNotificacoes = (req, res, next) => {
    const { idCliente, mensagem, dataNotificacao } = req.body;

    if (!idCliente || typeof idCliente !== 'number') {
        return res.status(400).json({
            msg: 'Campo idCliente inválido'
        });
    }

    if (!mensagem || typeof mensagem !== 'string') {
        return res.status(400).json({
            msg: 'Campo mensagem inválido'
        });
    }

    if (!dataNotificacao || isNaN(new Date(dataNotificacao).getTime())) {
        return res.status(400).json({
            msg: 'Campo dataNotificacao inválido'
        });
    }

    next();
};

const validateNotificacoesId = (req, res, next) => {
    const { id } = req.params;

    if (!id || typeof id !== 'string') {
        return res.status(400).json({
            msg: 'Parâmetro ID inválido'
        });
    }

    next();
};

module.exports = { validateNotificacoes, validateNotificacoesId };
