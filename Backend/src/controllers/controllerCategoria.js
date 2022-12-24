const mongoose = require('mongoose')
const Categoria = require('../models/categoriaModelo')



// CREAR NUEVO CATEGORIA

const setCategoria = async (req, res) => {

    try {
        let categoria;
        // creamos nuestra categoria
        categoria = new Categoria(req.body);
        await categoria.save();
        res.send(categoria);

    } catch (error) {
        console.log(error);
        res.status(500).send("hay un error al recibir los datos");
    }
}


// CONSULTAR UN CATEGORIA

const getCategoriaById = async (req, res) => {
    try {
        let categoria = await Categoria.findById(req.params.id);
        if (!categoria) {
            res.status(404).json({ msg: 'la categoria no existe' })
        }
        res.json(categoria);

    } catch (error) {
        console.log(error)
        res.status(500).send("hay un error al recibir los datos");

    }
}

// CONSULTAR TODOS LOS PRODUCTOS

const getCategorias = async (req, res) => {

    try {
        const categorias = await Categoria.find();
        res.json(categorias)

    } catch (error) {
        console.log(error)
        res.status(500).send("hay un error al recibir los datos");
    }
}


// ACTUALIZAR UN CATEGORIA

const updateCategoria = async (req, res) => {
    try {
        const { nombre } = req.body;
        let categoria = await Categoria.findById(req.params.id);
        if (!categoria) {
            res.status(404).json({ msg: 'la categoria no existe' })
        }
        categoria.nombre = nombre;

        categoria = await Categoria.findOneAndUpdate({ _id: req.params.id }, categoria, { new: true })
        res.json(categoria);

    } catch (error) {
        console.log(error)
        res.status(500).send("hay un error al recibir los datos");
    }
}


// BORRAR UN CATEGORIA

const deleteCategoria = async (req, res) => {
    try {
        let categoria = await Categoria.findById(req.params.id);
        if (!categoria) {
            res.status(404).json({ msg: 'el categoria no existe' })
        }
        await Categoria.findByIdAndRemove({ _id: req.params.id })
        res.json({ msg: 'categoria eliminada con exito' });
    } catch (error) {
        console.log(error)
        res.status(500).send("hay un error al recibir los datos");

    }
}

module.exports = {
    setCategoria,
    getCategoriaById,
    getCategorias,
    updateCategoria,
    deleteCategoria
}