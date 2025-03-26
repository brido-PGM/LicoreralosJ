const modeloProducto = require('../models/producto.model');

exports.create = async (req, res)=>{
    let nuevo_producto = new modeloProducto({
        "nombre_producto": req.body.nombre_producto,
        "tipo_producto": req.body.tipo_producto,
        "medidas": req.body.medidas,
        "precio": req.body.precio,
        "descripcion": req.body.descripcion,
        "cantidad": req.body.cantidad
    });
    let resultado = await nuevo_producto.save();
    console.log(resultado);
}

exports.list = async (req, res)=>{
    let resultado = await modeloProducto.find();
    console.log(resultado);
    if(resultado){
        res.json(resultado);
    } else {
        res.json({"mensaje": "No se encontraron productos"});
    }
}

exports.search = async (req, res)=>{
    let resultado = await modeloProducto.findById(req.body.nombre_producto);
    console.log(resultado);
    if(resultado){
        res.json(resultado);
    } else {
        res.json({"mensaje": "Producto no encontrado"});
    }
}

exports.delete = async (req, res)=>{
    let resultado = await modeloProducto.findByIdAndDelete(req.body.id);
    console.log(resultado);
    if(resultado){
        res.json({"mensaje": "Producto eliminado"});
    } else {
        res.json({"mensaje": "Producto no encontrado"});
    }
}

exports.update = async (req, res)=>{
    let resultado = await modeloProducto.findByIdAndUpdate(req.body.nombre_producto, {
        "nombre_producto": req.body.nombre_producto,
        "tipo_producto": req.body.tipo_producto,
        "medidas": req.body.medidas,
        "precio": req.body.precio,
        "descripcion": req.body.descripcion,
        "cantidad": req.body.cantidad
    });
    console.log(resultado);
    if(resultado){
        res.json({"mensaje": "Producto actualizado"});
    } else {
        res.json({"mensaje": "Producto no encontrado"});
    }
}