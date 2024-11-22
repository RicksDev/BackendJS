const { Router } = require('express');
const router = Router();
const clienteRoutes = require('./clienteRoutes');
const adminRoutes = require('./adminRoutes');
const contasRoutes = require('./contasRoutes');
const notificacoesRoutes = require('./notificacoesRoutes');
const transacoesRoutes = require('./transacoesRoutes');

router.use('/cliente', clienteRoutes);

router.use('/admin', adminRoutes);

router.use('/contas', contasRoutes);

router.use('/notificacoes', notificacoesRoutes);

router.use('/transacoes', transacoesRoutes);

module.exports = router;