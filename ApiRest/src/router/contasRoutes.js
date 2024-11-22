const { Router } = require('express');
const contasController = require('../controller/contaController');
const { validateContas, validateContasId } = require('../middlewares/validateContas');

const router = Router();


router.post('/', validateContas, contasController.create);

router.put('/:id', validateContasId, validateContas, contasController.update);

router.delete('/:id', validateContasId, contasController.delete);

router.get('/:id', validateContasId, contasController.getOne);

router.get('/', contasController.getAll);

module.exports = router;
