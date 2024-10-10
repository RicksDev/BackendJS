const { Router } = require('express');
const userController = require('../controller/userController');

const router = Router();
//Criar
router.post('/', userController.create);
//Atualizar
router.put('/:id', userController.update);
//Excluir
router.delete('/:id', userController.delete);
//Buscar único
router.get('/:id', userController.getOne);
//Buscar todos
router.get('/', userController.getAll);

module.exports = router;