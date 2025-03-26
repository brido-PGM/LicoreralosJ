const modelo_producto = require('../models/detalle_facturas.models');


// Listar detalle_facturas
exports.listar_detalle_facturas = async (req, res) => {
    try {
        const detalle_facturas = await modelo_producto.findAll();
        res.status(200).json(detalle_facturas);
    } catch (error) {
        res.status(500).json({ message: 'Error al listar los detalles de facturas', error });
    }
};

// Crear detalle_factura
exports.crear_detalle_factura = async (req, res) => {
    try {
        const nuevo_detalle = await modelo_producto.create(req.body);
        res.status(201).json(nuevo_detalle);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el detalle de factura', error });
    }
};
