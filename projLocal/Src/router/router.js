const { Router } = require("express");
const locationController = require('../controller/locationController');

const router = Router();

router.get('/', locationController.getHome);
router.get('/contato', locationController.getContact);
router.get('/home', locationController.getHome);
router.get('/location', locationController.getAllLocation);
router.get('/newLocation', locationController.getNewLocation);
router.post('/newLocation',locationController.postForm);

module.exports = router;