const express = require('express');
const router = express.Router();
const productoController = require('../controllers/producto.controller');

// Rutas para el CRUD de productos
router.post('/productos', productoController.create); // Crear
router.get('/productos', productoController.list); // Listar todos
router.get('/productos/:id', productoController.search); // Buscar por ID
router.put('/productos/:id', productoController.update); // Actualizar por ID
router.delete('/productos/:id', productoController.delete); // Eliminar por ID

module.exports = router;