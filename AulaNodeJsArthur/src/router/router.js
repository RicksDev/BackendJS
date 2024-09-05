const { Router } = require('express');
const userRoutes = require('./routerUser');
const produtoRoutes = require('./routerProduct');
const clienteRoutes = require('./routerCliente');
const UserController = require('../controller/userController');
const uploadRoutes = require('../router/routerUpload');

const router = Router();

router.use('/image', uploadRoutes);



router.use('/user', userRoutes);
router.use('/produto', produtoRoutes);
router.use('/cliente', clienteRoutes);
router.post('/login', userRoutes);


module.exports = router;