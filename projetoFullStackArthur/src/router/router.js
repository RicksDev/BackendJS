const { Router } = require('express');
const router = Router();
const eventoRoutes = require('../router/EventoRouter');
const participantesRoutes = require('../router/ParticipantesRouter');

router.use('/evento', eventoRoutes);
router.use('/participantes', participantesRoutes);



module.exports = router;