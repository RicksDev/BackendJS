const { Router } = require('express');
const userController = require('../controller/userController');
const { validateUser, validateUSerId } = require('../middlewares/validateUser');

const router = Router();
//Criar
router.post('/', validateUser,userController.create);
//Atualizar
router.put('/:id',validateUser, validateUSerId, userController.update);
//Excluir
router.delete('/:id',validateUSerId, userController.delete);
//Buscar único
router.get('/:id', validateUSerId, userController.getOne);
//Buscar todos
router.get('/', userController.getAll);

module.exports = router;