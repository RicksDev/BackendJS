const express = require ('express'); //Serivdor em JS
const router = require('./router/router');
const routerProduct = require('./router/routerProduct');
const sequelize = require('./config/config');
const User = require('./models/User');
const app = express();

//Modelo da API JSON
app.use(express.json());

app.use('/api/user', router);

app.use('/api/product', routerProduct);
//Req -> A requisição, ou seja, o que recebe do servidor
//Res -> O Response, o que enviamos ao servidor
app.get('/healthcheck', (req,res) => {
    return res.status(200).json({
        msg: 'Estamos Vivos!',
        alive: true
    })
});

sequelize.authenticate()
.then(() => {
    console.log("Conexão estabelecida com sucesso");
    return sequelize.sync();
})
.then(() => {
    app.listen(8080, (req, res) => {
        console.log('O servidor está rondando na porta 8080. http://127.0.0.1:8080');
        
    });
})
 
.catch((error) => {
    console.error("Erro ao se conectar com o banco:", error);
});

//Listen -> Ouvir o servidor na porta 8080
