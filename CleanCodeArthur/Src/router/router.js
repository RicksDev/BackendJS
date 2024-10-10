const { Router } = require('express');
const userRoutes = require('./usuarioRotas');
const router = Router();

router.use('/user', userRoutes);

module.exports = router;