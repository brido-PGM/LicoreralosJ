const modeloProducto = require('../models/facturas.models');



// Listar facturas
exports.listarFacturas = async (req, res) => {
    try {
        const facturas = await modeloProducto.find();
        res.status(200).json(facturas);
    } catch (error) {
        res.status(500).json({ message: 'Error al listar las facturas', error });
    }
};

// Crear factura
exports.crearFactura = async (req, res) => {
    try {
        const nuevaFactura = new modeloProducto(req.body);
        const facturaGuardada = await nuevaFactura.save();
        res.status(201).json(facturaGuardada);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear la factura', error });
    }
};
