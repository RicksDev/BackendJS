const express = require('express');
const sequelize = require('./src/config/config');
const routes = require('./src/router/router');

const app = express();


app.use('/api', routes);

app.use(express.json());

app.get('/healthcheck', (req,res) => {
    return res.status(200).json({
        msg: 'Estamos Vivos!',
        alive: true,
        
    })
});

sequelize.authenticate()
.then(() => {
    console.log('Conexão estabelecida com sucesso!');

    return sequelize.sync();
})
.then(() => {
    app.listen(3000, (req, res) => {
        console.log('Estamos rodando na porta 3000')
    });
})

.catch ((error) => {
    console.error('Erro ao se conectar com o banco:', error);
})
