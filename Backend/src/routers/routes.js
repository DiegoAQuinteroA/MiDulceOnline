const { Router } = require('express')
const router = Router()
const {
    setProducto,
    getProductos,
    getProductoById,
    updateProducto,
    deleteProducto
} = require('../controllers/controllerProducto')

const {
    setCategoria,
    getCategorias,
    getCategoriaById,
    updateCategoria,
    deleteCategoria
} = require('../controllers/controllerCategoria')
const {
    setCliente,
    getClientes,
    getClienteById,
    updateCliente,
    deleteCliente
} = require('../controllers/controllerCliente')

const usuarioController = require('../controllers/usuarioController')
// router.route('/productos').get(getProductos).post(setProducto)
// router.route('/productos/:id').put(updateProducto).get(getProductoById).delete(deleteProducto)



// ENDPOINTS CLIENTES

router.get('/clientes/:id', getClienteById)
router.get('/clientes', getClientes)
router.post('/clientes', setCliente)
router.put('/clientes/:id', updateCliente)
router.delete('/clientes/:id', deleteCliente)
module.exports = router

// ENDPOINTS CATEGORIAS


router.get('/categorias/:id', getCategoriaById)
router.get('/categorias', getCategorias)
router.post('/categorias', setCategoria)
router.put('/categorias/:id', updateCategoria)
router.delete('/categorias/:id', deleteCategoria)


// ENDPOINTS PRODUCTOS

router.get('/productos/:id', getProductoById)
router.get('/productos', getProductos)
router.post('/productos', setProducto)
router.put('/productos/:id', updateProducto)
router.delete('/productos/:id', deleteProducto)
module.exports = router

// ENDPOINTS USUARIOS

router.get('/usuarios', usuarioController.mostrarUsuarios);
router.post('/usuarios', usuarioController.crearUsuario);
router.get('/usuarios/:id', usuarioController.obtenerUsuario);
router.put('/usuarios/:id', usuarioController.actualizarUsuario);
router.delete('/usuarios/:id', usuarioController.eliminarUsuario);


