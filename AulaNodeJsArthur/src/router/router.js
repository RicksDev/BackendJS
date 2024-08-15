const { Router } = require('express');
const userController = require('../controller/userController');


const router = Router();

//Configurar as rotas (CRUD);

router.post('/', (req,res) => {
    userController.create(req,res)
});

router.get('/', (req,res) => {
    userController.getAll(req,res);
});

// /api/users/:id => Isso é um modelo de (params)

// api/users?id=3216 => Isto é uma (Query)

// {body: {id: "3212"} } => (Body)

router.delete('/:id', (req,res) => {
    userController.delete(req,res);
});

router.put('/:id', (req,res) => {
    userController.update(req,res);
});

router.get('/:id', (req,res) => {
    userController.getOne(req,res);
});





module.exports = router;