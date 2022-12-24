const mongoose = require('mongoose')
const Producto = require('../models/productoModelo')
const Categoria = require('../models/categoriaModelo')


// CREAR NUEVO PRODUCTO

const setProducto = async (req, res) => {

    try {
        let producto;
        // creamos nuestro producto
        producto = new Producto(req.body);
        await producto.save();
        res.send(producto);

    } catch (error) {
        console.log(error);
        res.status(500).send("hay un error al recibir los datos");
    }
}


// CONSULTAR UN PRODUCTO

const getProductoById = async (req, res) => {
    try {
        let producto = await Producto.findById(req.params.id);
        if (!producto) {
            res.status(404).json({ msg: 'el producto no existe' })
        }
        res.json(producto);

    } catch (error) {
        console.log(error)
        res.status(500).send("hay un error al recibir los datos");

    }
}

// CONSULTAR PRODUCTOS POR CATEGORIA




// CONSULTAR TODOS LOS PRODUCTOS

const getProductos = async (req, res) => {

    try {
        const productos = await Producto.find();
        res.json(productos)

    } catch (error) {
        console.log(error)
        res.status(500).send("hay un error al recibir los datos");
    }
}


// ACTUALIZAR UN PRODUCTO

const updateProducto = async (req, res) => {
    try {
        const { nombre, categoria, presentacion, cantidad, precio_venta } = req.body;
        let producto = await Producto.findById(req.params.id);
        if (!producto) {
            res.status(404).json({ msg: 'el producto no existe' })
        }

        producto.nombre = nombre;
        producto.categoria = categoria;
        producto.presentacion = presentacion;
        producto.cantidad = cantidad;
        producto.precio_venta = precio_venta;

        producto = await Producto.findOneAndUpdate({ _id: req.params.id }, producto, { new: true })
        res.json(producto);

    } catch (error) {
        console.log(error)
        res.status(500).send("hay un error al recibir los datos");
    }
}


// BORRAR UN PRODUCTO

const deleteProducto = async (req, res) => {
    try {
        let producto = await Producto.findById(req.params.id);
        if (!producto) {
            res.status(404).json({ msg: 'el producto no existe' })
        }
        await Producto.findByIdAndRemove({ _id: req.params.id })
        res.json({ msg: 'producto eliminado con exito' });
    } catch (error) {
        console.log(error)
        res.status(500).send("hay un error al recibir los datos");

    }
}

module.exports = {
    setProducto,
    getProductoById,
    getProductos,
    updateProducto,
    deleteProducto
}