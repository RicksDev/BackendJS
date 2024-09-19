const { Router } = require('express');
const router = Router();
const { validateEvento, validateEventoId } = require('../middlewares/validateEvento')

const eventoController = require('../controller/EventoController');

router.post('/', validateEvento, validateEventoId, (req, res) => {
    eventoController.create(req,res)
});

router.get('/', validateEventoId, (req, res) => {
    eventoController.getAll(req,res);
});

router.get('/:id', validateEventoId, (req,res) => {
    eventoController.getOne(req, res);
});

router.put('/:id', validateEvento, validateEventoId, (req, res) => {
    eventoController.update(req,res);
});

router.delete('/:id', validateEventoId, (req, res) => {
    eventoController.delete(req, res);
});

router.get('/:id/participantes', )

module.exports = router;
