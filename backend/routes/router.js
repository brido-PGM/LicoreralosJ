const exp= require('express');
const router= exp.Router();
const controlandoProducto= require('../controllers/producto.controller');

router.get('/crearProductos', controlandoProducto.addProducto);

router.get('/buscarProductos/:x', controlandoProducto.search);

module.exports= router;