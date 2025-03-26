const modelo_usuario = require('../models/usuario.model');

exports.create = async (req, res)=>{
    let nuevo_usuario = new modelo_usuario({
        "nombre": req.body.nombre,
        "apellido": req.body.apellido,
        "cuenta": req.body.cuenta,
        "telefono": req.body.telefono,
        "direccion": req.body.direccion,
        "correo": req.body.correo
    });
    let resultado = await nuevo_usuario.save();
    console.log(resultado);
}

exports.list = async (req, res)=>{
    let resultado = await modelo_usuario.find();
    console.log(resultado);
    if(resultado){
        res.json(resultado);
    } else {
        res.json({"mensaje": "No se encontraron usuarios"});
    }
}

exports.search = async (req, res)=>{
    let resultado = await modelo_usuario.findById(req.body.correo);
    console.log(resultado);
    if(resultado){
        res.json(resultado);
    } else {
        res.json({"mensaje": "Usuario no encontrado"});
    }
}

exports.delete = async (req, res)=>{
    let resultado = await modelo_usuario.findByIdAndDelete(req.body.correo);
    console.log(resultado);
    if(resultado){
        res.json({"mensaje": "Usuario eliminado"});
    } else {
        res.json({"mensaje": "Usuario no encontrado"});
    }
}

exports.update = async (req, res)=>{
    let resultado = await modelo_usuario.findByIdAndUpdate(req.body.correo, {
        "nombre": req.body.nombre,
        "apellido": req.body.apellido,
        "cuenta": req.body.cuenta,
        "telefono": req.body.telefono,
        "direccion": req.body.direccion,
        "correo": req.body.correo
    });
    console.log(resultado);
    if(resultado){
        res.json({"mensaje": "Usuario actualizado"});
    } else {
        res.json({"mensaje": "Usuario no encontrado"});
    }
}
