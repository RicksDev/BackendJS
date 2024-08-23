
//req: request
//res: Response
//next: NextFunction
const validateProduct = (req, res, next) => {
    const { nome, preco, quantidade } = req.body;

    //!nome = diferente
    if(!nome || !preco || !quantidade) {
        return res.status(400).json({
            msg: 'Campos inválidos, revise caro colega'
        })
    }

    return next();
};

const validateProductID = (req, res, next) => {
    const { id } = req.params;

    if(!id) {
        return res.status(400).json({
            msg:'Parâmetro faltando'
        })
    };

    return next();


};

module.exports = {validateProduct, validateProductID};