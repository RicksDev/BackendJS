const express = require ('express');
const router = require('./router/router');
const app = express();

//Modelo da API JSON
app.use(express.json());
app.use('/api/user', router);
//Req -> A requisição, ou seja, o que recebe do servidor
//Res -> O Response, o que enviamos ao servidor
app.get('/healthcheck', (req,res) => {
    return res.status(200).json({
        msg: 'Estamos Vivos!',
        alive: true
    })
});

//Listen -> Ouvir o servidor na porta 8080
app.listen(8080, (req, res) => {
    console.log('O servidor está rondando na porta 8080. http://127.0.0.1:8080');
    
});