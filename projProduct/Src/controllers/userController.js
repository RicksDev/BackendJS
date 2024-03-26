const userRepository = require('../services/userRepository');

// O async => que ele vai executar o processo até o final independente do que acontecer.
exports.getAllUsers = async (req, res) => {
    try {
        //Quando tem o async, ele deve trabalhar dentro de um período.
        const user = await userRepository.getAllUsers();
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ error: err.toString() });
    }
};
                                                        
exports.getUserById = async (req, res) => {
    try {
        const user = await userRepository.getUserById(req.params.id);
        if (!user) {
            res.status(404).json({ error: 'Usuario não encontrado' });
        } else {
            res.status(200).json(user);
        }
    } catch (err) {
        res.status(500).json({ error: err.toString() });
    }
};

exports.createUser = async (req, res) => {
    try {
        const user = await userRepository.createUser(req.body);
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json({ error: err.toString() });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const user = await userRepository.UpdateUser(req.params.id, req.body);
        if (!user) {
            res.status(404).json({ error: 'Usuario não encontrado' });
        } else {
            res.status(200).json(user);
        }
    } catch (err) {
        res.status(500).json({ error: err.toString() });
    }
};

// exports.deleteUser = async (req, res) => {
//     try{
//         const user = await userRepository.deleteUser(req.params.id);
//         if(!user) {
//             res.status(404).json({error: 'Produto não encontrado'});
//         } else {
//             res.status(200).json({msg : 'Produto deletado com sucesso'})
//         }
//     } catch(err) {
//         res.status(500).json({json:err.toString()});

//     }
// };

exports.deleteUser = async (req, res) => {
    try {
        const User = await userRepository.deleteUser(req.params.id);
        if (!User) {
            res.status(404).json({ error: "Usuario nao encontrado" });
        } else {
            res.status(200).json({ msg: "Usuario deletado com sucesso" });
        }
    } catch (err) {
        res.status(500).json({ error: err.toString() });
    }
};