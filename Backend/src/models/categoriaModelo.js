const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const CategoriaSchema = Schema({
    nombre: {
        type: String,
        required: true
    }
})
const Categoria = mongoose.model('categoria', CategoriaSchema)
module.exports = Categoria
