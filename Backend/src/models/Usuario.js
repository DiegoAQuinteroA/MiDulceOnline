const mongoose = require('mongoose');

const usuarioSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },

    password: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('usuario', usuarioSchema);
