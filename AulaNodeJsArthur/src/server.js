const express = require ('express'); //Serivdor em JS
require('dotenv').config();

const routerProduct = require('./router/routerProduct');
const routerCliente = require('./router/routerCliente');
const routerUpload = require('./router/routerUpload');

const routerUser = require('./router/routerUser')
const sequelize = require('./config/config');
const User = require('./models/User');
const app = express();

//Modelo da API JSON
app.use(express.json());
app.use(cors());

app.use('/api/image', routerUpload)

app.use('/api/user', routerUser);

app.use('/api/product', routerProduct);

app.use('/api/cliente', routerCliente);
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
    app.listen(process.env.PORT == null ? 8080: process.env.PORT, (req, res) => {
        console.log('O servidor está rondando na porta 8080. http://127.0.0.1:8080');
        
    });
})
 
.catch((error) => {
    console.error("Erro ao se conectar com o banco:", error);
});

//Listen -> Ouvir o servidor na porta 8080
