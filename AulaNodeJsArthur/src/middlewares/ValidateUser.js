
//req: request
//res: Response
//next: NextFunction
const validateUser = (req, res, next) => {
    const { nome, email, senha } = req.body;

    //!nome = diferente
    if(!nome || !email || !senha) {
        return res.status(400).json({
            msg: 'Campos inválidos, revise caro colega'
        })
    }

    return next();
};

const validateAmbienteID = (req, res, next) => {
    const { id } = req.params;

    if(!id) {
        return res.status(400).json({
            msg:'Parâmetro faltando'
        })
    };

    return next();


};

module.exports = {validateUser, validateAmbienteID};