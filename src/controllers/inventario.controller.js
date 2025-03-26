const modelo_inventario = require('../models/producto.model');
const modelo_usuario = require('../models/usuario.model');
const modelo_producto = require('../models/producto.model');

exports.create = async (req, res) => {
    let buscar_usuario = await modelo_usuario.findOne({ "cuenta": "Administrador" });
    let usuario = res.json(buscar_usuario);

    let buscar_producto = await modelo_producto.findOne(req.body.nombre_producto);
    let producto = res.json(buscar_producto);

    let nuevo_registro = new modelo_inventario({
        "userId": usuario._id,
        "producId": producto.id,
        "tipo_de_producto": req.body.tipo_de_producto,
        "cantidad": req.body.cantidad,
        "valor_compra": req.body.valor_compra,
        "valor_venta": req.body.valor_venta,
        "descripcion": req.body.descripcion
    });
    let resultado = await nuevo_registro.save();
    console.log(resultado);
}

exports.read = async (req, res) => {
    try {
        const inventarios = await modelo_inventario.find();
        res.json(inventarios);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener los registros", error });
    }
};

exports.update = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;
        const updatedInventario = await modelo_inventario.findByIdAndUpdate(id, updatedData, { new: true });
        if (!updatedInventario) {
            return res.status(404).json({ message: "Registro no encontrado" });
        }
        res.json(updatedInventario);
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar el registro", error });
    }
};

exports.delete = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedInventario = await modelo_inventario.findByIdAndDelete(id);
        if (!deletedInventario) {
            return res.status(404).json({ message: "Registro no encontrado" });
        }
        res.json({ message: "Registro eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar el registro", error });
    }
};

