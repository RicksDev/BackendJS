const { Router } = require('express');
const userRoutes = require('./usuarioRotas');
const adminRoutes = require('./adminRoutes');
const router = Router();

router.use('/user', userRoutes);

router.use('/admin', adminRoutes)

module.exports = router;