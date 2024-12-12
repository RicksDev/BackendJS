const { Router } = require('express');
const adminController = require('../controller/adminController');
const { validateAdmin, validateAdminId } = require('../middlewares/validateAdmin');

const router = Router();

// Rota para criar um administrador
router.post('/', validateAdmin, adminController.create);

// Rota para atualizar um administrador por ID
router.put('/:id', validateAdminId, validateAdmin, adminController.update);

// Rota para deletar um administrador por ID
router.delete('/:id', validateAdminId, adminController.delete);

// Rota para obter um administrador por ID
router.get('/:id', validateAdminId, adminController.getOne);

// Rota para obter todos os administradores
router.get('/', adminController.getAll);

router.post('/login', adminController.login);



module.exports = router;
