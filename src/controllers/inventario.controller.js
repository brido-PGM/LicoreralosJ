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

