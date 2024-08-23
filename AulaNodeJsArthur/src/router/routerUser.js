const { Router } = require('express');
const userController = require('../controller/userController');
const { validateUser, validateAmbienteID } = require('../middlewares/ValidateUser');


const router = Router();

//Configurar as rotas (CRUD);

router.post('/', validateUser, (req,res) => {
    userController.create(req,res)
});

router.get('/', validateAmbienteID,validateUser, (req,res) => {
    userController.getAll(req,res);
});

// /api/users/:id => Isso é um modelo de (params)

// api/users?id=3216 => Isto é uma (Query)

// {body: {id: "3212"} } => (Body)

router.delete('/:id', validateAmbienteID, (req,res) => {
    userController.delete(req,res);
});

router.put('/:id', validateUser, validateAmbienteID, (req,res) => {
    userController.update(req,res);
});

router.get('/:id', validateAmbienteID, (req,res) => {
    userController.getOne(req,res);
});





module.exports = router;