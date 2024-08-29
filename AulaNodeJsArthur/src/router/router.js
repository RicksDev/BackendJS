const { Router } = require('express');
const userRoutes = require('./routerUser');
const produtoRoutes = require('./routerProduct');
const clienteRoutes = require('./routerCliente');
const UserController = require('../controller/userController');

const router = Router();

router.use('/user', userRoutes);
router.use('/produto', produtoRoutes);
router.use('/cliente', clienteRoutes);
router.post('/login', userRoutes);


module.exports = router;