const validateAdmin = (req, res, next) => {
    const { nome, email, idade, senha } = req.body;

    if (!nome || typeof nome !== 'string') {
        return res.status(400).json({
            msg: 'Campo nome inválido'
        });
    }

    if (!email || typeof email !== 'string') {
        return res.status(400).json({
            msg: 'Campo email inválido'
        });
    }

    if (!(email.includes('@') && email.includes('.'))) {
        return res.status(400).json({
            msg: 'Formato de email inválido'
        });
    }

    if (idade === undefined || typeof idade !== 'number' || idade < 18) {
        return res.status(400).json({
            msg: 'Campo idade inválido. Deve ser um número maior ou igual a 18'
        });
    }

    if (!senha || typeof senha !== 'string' || senha.length < 6) {
        return res.status(400).json({
            msg: 'Campo senha inválido. A senha deve ter pelo menos 6 caracteres'
        });
    }

    next();
};

const validateAdminId = (req, res, next) => {
    const { id } = req.params;

    if (!id || typeof id !== 'string') {
        return res.status(400).json({
            msg: 'Parâmetro ID inválido'
        });
    }

    next();
};

module.exports = { validateAdmin, validateAdminId };
