const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ProductoSchema = Schema({
    nombre: {
        type: String,
        required: true
    },
    categoria: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'categoria'
    },
    presentacion: {
        type: String,
        required: true
    },
    cantidad: {
        type: Number,
        required: true
    },
    precio_venta: {
        type: Number,
        required: true
    }
})
const Producto = mongoose.model('producto', ProductoSchema)
module.exports = Producto
