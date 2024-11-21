const { Router } = require('express');
const contasController = require('../controller/contaController');
const { validateContas, validateContaId } = require('../middlewares/validateContas');

const router = Router();


router.post('/', validateContas, contasController.create);

router.put('/:id', validateContaId, validateContas, contasController.update);

router.delete('/:id', validateContaId, contasController.delete);

router.get('/:id', validateContaId, contasController.getOne);

router.get('/', contasController.getAll);

module.exports = router;
