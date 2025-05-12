
const exp = require('express');
const router = exp.Router();
const controladorProducto = require('../src/controllers/producto.controller')

router.get('/verProductos', controladorProducto.list);

module.exports = router;