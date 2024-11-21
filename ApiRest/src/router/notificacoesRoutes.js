const { Router } = require('express');
const notificacoesController = require('../controller/notificacoesController');
const { validateNotificacoes, validateNotificacoesId } = require('../middlewares/validateNotificacoes');

const router = Router();

// Rota para criar uma notificação
router.post('/', validateNotificacoes, notificacoesController.create);

// Rota para atualizar uma notificação por ID
router.put('/:id', validateNotificacoesId, validateNotificacoes, notificacoesController.update);

// Rota para deletar uma notificação por ID
router.delete('/:id', validateNotificacoesId, notificacoesController.delete);

// Rota para obter uma notificação por ID
router.get('/:id', validateNotificacoesId, notificacoesController.getOne);

// Rota para obter todas as notificações
router.get('/', notificacoesController.getAll);

module.exports = router;
