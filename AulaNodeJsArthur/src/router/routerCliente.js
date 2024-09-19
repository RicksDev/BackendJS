const { Router } = require('express');
const clienteController = require('../controller/clienteController');
const { validateCliente, validateClienteID } = require('../middlewares/ValidadeCliente');


const router = Router();

//Configurar as rotas (CRUD);

router.post('/', validate   Cliente, (req,res) => {
    clienteController.create(req,res)
});

router.get('/', validateClienteID,validateCliente, (req,res) => {
    clienteController.getAll(req,res);
});

// /api/users/:id => Isso é um modelo de (params)

// api/users?id=3216 => Isto é uma (Query)

// {body: {id: "3212"} } => (Body)

router.delete('/:id', validateClienteID, (req,res) => {
    clienteController.delete(req,res);
});

router.put('/:id', validateCliente, validateClienteID, (req,res) => {
    clienteController.update(req,res);
});

router.get('/:id', validateClienteID, (req,res) => {
    clienteController.getOne(req,res);
});





module.exports = router;