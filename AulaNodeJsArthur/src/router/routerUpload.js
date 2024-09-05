const { Router } = require('express');

const multer = require('multer');
const uploadController = require('../controller/uploadController');

const storage = multer.memoryStorage();
const upload = multer({storage: storage});

const router = Router();



router.post('/upload', upload.single('image'), (req, res) => {
    uploadController.uploadImage(req, res);
});

router.get('/images', (req, res) => {
    uploadController.listImages( req, res);
});

router.get('/:imageName', (req, res) => {
    uploadController.getImage( req, res);
});

module.exports = router;