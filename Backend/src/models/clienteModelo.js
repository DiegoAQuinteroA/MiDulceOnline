const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ClienteSchema = Schema({
    nombre: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})
const Cliente = mongoose.model('cliente', ClienteSchema)
module.exports = Cliente