const modeloProducto = require('../models/detalle_facturas.models');


// Listar detalle_facturas
exports.listarDetalleFacturas = async (req, res) => {
    try {
        const detalleFacturas = await modeloProducto.findAll();
        res.status(200).json(detalleFacturas);
    } catch (error) {
        res.status(500).json({ message: 'Error al listar los detalles de facturas', error });
    }
};

// Crear detalle_factura
exports.crearDetalleFactura = async (req, res) => {
    try {
        const nuevoDetalle = await modeloProducto.create(req.body);
        res.status(201).json(nuevoDetalle);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el detalle de factura', error });
    }
};
