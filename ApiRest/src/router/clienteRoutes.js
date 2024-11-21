const { Router } = require('express');
const clienteController = require('../controller/clienteController');
const { validateCliente, validateClienteId } = require('../middlewares/validateCliente');

const router = Router();

// Rota para criar um cliente
router.post('/', validateCliente, clienteController.create);

// Rota para atualizar um cliente por ID
router.put('/:id', validateClienteId, validateCliente, clienteController.update);

// Rota para deletar um cliente por ID
router.delete('/:id', validateClienteId, clienteController.delete);

// Rota para obter um cliente por ID
router.get('/:id', validateClienteId, clienteController.getOne);

// Rota para obter todos os clientes
router.get('/', clienteController.getAll);

module.exports = router;
