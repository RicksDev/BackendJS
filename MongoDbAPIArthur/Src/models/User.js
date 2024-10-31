const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    idade: {
        type: String,
        require: true
    }
}, { timestamps: true })

module.exports = mongoose.model('User', userSchema);