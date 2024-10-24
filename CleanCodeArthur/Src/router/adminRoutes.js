const { Router } = require('express');
const adminController = require('../controller/adminController');
const { validateAdmin, validateAdminId} = require('../middlewares/validateAdmin')

const router = Router();

router.post('/',validateAdmin ,adminController.create);

router.put('/:id',  validateAdmin, validateAdminId,adminController.update);

router.delete('/:id', validateAdminId , adminController.delete);

router.get('/:id', validateAdminId , adminController.getoOne);

router.get('/', adminController.getAll);

router.post('/login', adminController.login);

module.exports = router;