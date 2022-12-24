const mongoose = require('mongoose')
const Cliente = require('../models/clienteModelo')



// CREAR NUEVO CLIENTE

const setCliente = async (req, res) => {

    try {
        let cliente;
        // creamos nuestra cliente
        cliente = new Cliente(req.body);
        await cliente.save();
        res.send(cliente);

    } catch (error) {
        console.log(error);
        res.status(500).send("hay un error al recibir los datos");
    }
}


// CONSULTAR UN CLIENTE

const getClienteById = async (req, res) => {
    try {
        let cliente = await Cliente.findById(req.params.id);
        if (!cliente) {
            res.status(404).json({ msg: 'la cliente no existe' })
        }
        res.json(cliente);

    } catch (error) {
        console.log(error)
        res.status(500).send("hay un error al recibir los datos");

    }
}

// CONSULTAR TODOS LOS CLIENTES

const getClientes = async (req, res) => {

    try {
        const clientes = await Cliente.find();
        res.json(clientes)

    } catch (error) {
        console.log(error)
        res.status(500).send("hay un error al recibir los datos");
    }
}


// ACTUALIZAR UN CLIENTE

const updateCliente = async (req, res) => {
    try {
        const { nombre, email, password } = req.body;
        let cliente = await Cliente.findById(req.params.id);
        if (!cliente) {
            res.status(404).json({ msg: 'la cliente no existe' })
        }
        cliente.nombre = nombre;
        cliente.email = email;
        cliente.password = password;

        cliente = await Cliente.findOneAndUpdate({ _id: req.params.id }, cliente, { new: true })
        res.json(cliente);

    } catch (error) {
        console.log(error)
        res.status(500).send("hay un error al recibir los datos");
    }
}


// BORRAR UN CLIENTE

const deleteCliente = async (req, res) => {
    try {
        let cliente = await Cliente.findById(req.params.id);
        if (!cliente) {
            res.status(404).json({ msg: 'el cliente no existe' })
        }
        await Cliente.findByIdAndRemove({ _id: req.params.id })
        res.json({ msg: 'cliente eliminado con exito' });
    } catch (error) {
        console.log(error)
        res.status(500).send("hay un error al recibir los datos");

    }
}

module.exports = {
    setCliente,
    getClienteById,
    getClientes,
    updateCliente,
    deleteCliente
}