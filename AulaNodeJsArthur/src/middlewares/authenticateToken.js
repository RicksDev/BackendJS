const jwt = require('jsonwebtoken');

function authenticateToken (req, res, next) {
    //o Ponto de interrogação é como se fosse o If, tem o valor?
    const token = req.headers['authorization']?.split('')[1];

    if(!token) {
        return res.status(401).json({
            msg:'Acesso negado'
        })
    }

    jwt.verify(token, process.env.SECRET, (err, user) => {
        if(err) {
            return res.status(403).json({
                msg:'Acesso negado!'
            })
        }
        //Armazenar o usuário na requisição
        req.user = user;
        
        next();

    })

    
};

module.exports = authenticateToken;