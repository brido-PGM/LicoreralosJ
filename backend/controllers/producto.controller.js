const modelo_producto = require('../models/producto.model');

// Crear un producto
exports.create = async (req, res) => {
    try {
        let nuevo_producto = new modelo_producto({
            "nombre_producto": req.body.nombre_producto,
            "tipo_producto": req.body.tipo_producto,
            "medidas": req.body.medidas,
            "precio": req.body.precio,
            "descripcion": req.body.descripcion,
            "cantidad": req.body.cantidad
        });
        let resultado = await nuevo_producto.save();
        console.log(resultado);
        res.status(201).json({ mensaje: "Producto creado", producto: resultado });
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: "Error al crear el producto", error });
    }
};

// Listar todos los productos
exports.list = async (req, res) => {
    try {
        let resultado = await modelo_producto.find();
        console.log(resultado);
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(404).json({ mensaje: "No se encontraron productos" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: "Error al listar los productos", error });
    }
};

// Buscar un producto por ID
exports.search = async (req, res) => {
    try {
        let resultado = await modelo_producto.findById(req.params.id);
        if (resultado) {
            res.status(200).json(resultado);
        } else {
            res.status(404).json({ mensaje: "Producto no encontrado" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: "Error al buscar el producto", error });
    }
};

// Eliminar un producto por ID
exports.delete = async (req, res) => {
    try {
        let resultado = await modelo_producto.findByIdAndDelete(req.params.id);
        if (resultado) {
            res.status(200).json({ mensaje: "Producto eliminado" });
        } else {
            res.status(404).json({ mensaje: "Producto no encontrado" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: "Error al eliminar el producto", error });
    }
};

// Actualizar un producto por ID
exports.update = async (req, res) => {
    try {
        let resultado = await modelo_producto.findByIdAndUpdate(
            req.params.id,
            {
                "nombre_producto": req.body.nombre_producto,
                "tipo_producto": req.body.tipo_producto,
                "medidas": req.body.medidas,
                "precio": req.body.precio,
                "descripcion": req.body.descripcion,
                "cantidad": req.body.cantidad
            },
            { new: true } // Devuelve el documento actualizado
        );
        if (resultado) {
            res.status(200).json({ mensaje: "Producto actualizado", producto: resultado });
        } else {
            res.status(404).json({ mensaje: "Producto no encontrado" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: "Error al actualizar el producto", error });
    }
};


