require ('dotenv').config(); //Arquiv => .env
const express = require('express');
const { sequelize } = require('./models');
const routes = require('./router/router')

const app = express(); //Iniciando servidor
app.use(express.json()); // Resposta via JSON

// vai ser /api/user/
app.use('/api', routes);

sequelize.authenticate()
    .then(() => {
        console.log('Conexão com o banco de dados estabelecida');
    })
    .catch(err => {
        console.error('Erro ao conectar no banco', err);
    })
//process.env ? PORT: 3000
const PORT = process.env.PORT || 3000;
//Ouvindo na possível ou na porta 3000;
app.listen(PORT, () => {
    console.log('----------------------------------');
    console.log(`Servidor rodando na porta: http://${PORT}`);
    console.log('----------------------------------');
});