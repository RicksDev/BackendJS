
//req: request
//res: Response
//next: NextFunction
const validateCliente = (req, res, next) => {
    const { nome, email, cpf, rg, senha } = req.body;

    //!nome = diferente
    if(!nome || !email || !cpf || !rg || !senha) {
        return res.status(400).json({
            msg: 'Campos inválidos, revise caro colega'
        })
    }

    return next();
};

const validateClienteID = (req, res, next) => {
    const { id } = req.params;

    if(!id) {
        return res.status(400).json({
            msg:'Parâmetro faltando'
        })
    };

    return next();


};

module.exports = {validateCliente, validateClienteID};