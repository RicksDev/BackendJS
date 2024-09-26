const { Router } = require('express');
const participantesController = require('../controller/ParticipantesController');
const {validateParticipantes, validateParticipantesId} = require('../middlewares/validadeParticipantes');

const router = Router();

router.post('/', validateParticipantes, (req, res) => {
    participantesController.create(req,res);
});

router.get('/', (req, res) => {
    participantesController.getAll(req, res);
});

router.get('/:id', validateParticipantesId, (req, res) => {
    participantesController.getOne(req, res);
});
router.put('/:id', validateParticipantesId, validateParticipantes, (req, res) => {
    participantesController.update(req, res);
});

router.delete('/:id', validateParticipantesId, (req, res) => {
    participantesController.delete(req, res);
});

router.get('/por-evento/:eventoId', (req, res) => {
    participantesController.getParticipantes(req, res);
})

module.exports = router;
