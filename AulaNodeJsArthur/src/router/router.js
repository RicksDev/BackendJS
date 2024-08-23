const { Router } = require('express');
const userRoutes = require('./routerUser');
const produtoRoutes = require('./routerProduct');
const clienteRoutes = require('./routerCliente');

const router = Router();

router.use('/user', userRoutes);
router.use('/produto', userRoutes);
router.use('/cliente', userRoutes);

module.exports = router;