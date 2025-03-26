const modelo_producto = require('../models/facturas.models');

// Listar facturas
exports.listar_facturas = async (req, res) => {
    try {
        const facturas = await modelo_producto.find();
        res.status(200).json(facturas);
    } catch (error) {
        res.status(500).json({ message: 'Error al listar las facturas', error });
    }
};

// Crear factura
exports.crear_factura = async (req, res) => {
    try {
        const nueva_factura = new modelo_producto(req.body);
        const factura_guardada = await nueva_factura.save();
        res.status(201).json(factura_guardada);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear la factura', error });
    }
};
