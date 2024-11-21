const { Router } = require('express');
const transacoesController = require('../controller/transacoesController');
const { validateTransacoes, validateTransacoesId } = require('../middlewares/validateTransacoes');

const router = Router();

// Rota para criar uma transação
router.post('/', validateTransacoes, transacoesController.create);

// Rota para atualizar uma transação por ID
router.put('/:id', validateTransacoesId, validateTransacoes, transacoesController.update);

// Rota para deletar uma transação por ID
router.delete('/:id', validateTransacoesId, transacoesController.delete);

// Rota para obter uma transação por ID
router.get('/:id', validateTransacoesId, transacoesController.getOne);

// Rota para obter todas as transações
router.get('/', transacoesController.getAll);

module.exports = router;
