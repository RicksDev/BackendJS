const express = require('express');
const sequelize = require('./src/config/config');
const routes = require('./src/router/router');
const clienteRoutes = require('./src/router/clienteRoutes');
const adminRoutes = require('./src/router/adminRoutes');
const contasRoutes = require('./src/router/contasRoutes');
const notificacoesRoutes = require('./src/router/notificacoesRoutes');
const transacoesRoutes = require('./src/router/transacoesRoutes');

const app = express();

app.use(express.json());

app.use('/api', routes);
app.use('/cliente', clienteRoutes);

app.use('/admin', adminRoutes);

app.use('/contas', contasRoutes);

app.use('/notificacoes', notificacoesRoutes);

app.use('/transacoes', transacoesRoutes);

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
