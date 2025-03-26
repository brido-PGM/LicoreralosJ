const modeloProveedor = require('../models/proveedor.model')
const modeloUsuario = require('../models/usuario.model')

exports.create = async (req, res)=>{
    let buscar_admin = await modeloUsuario.findOne({"cuenta": "Administrador"});
    let admin = res.json(buscar_admin);

    let nuevo_proveedor = new modeloProveedor({
        "admnId": admin._id,
        "empresa": req.body.empresa,
        "correo": req.body.correo,
        "nombre": req.body.nombre,
        "apellido": req.body.apellido,
        "telefono": req.body.telefono
    });
    let resultado = await nuevo_proveedor.save();
    console.log(resultado);
}

exports.list = async (req, res)=>{
    let resultado = await modeloProveedor.find();
    console.log(resultado);
    if(resultado){
        res.json(resultado);
    } else {
        res.json({"mensaje": "No se encontraron proveedores"});
    }
}

exports.search = async (req, res)=>{
    let resultado = await modeloProveedor.findById(req.body.nombre);
    console.log(resultado);
    if(resultado){
        res.json(resultado);
    } else {
        res.json({"mensaje": "Proveedor no encontrado"});
    }
}

exports.delete = async (req, res)=>{
    let resultado = await modeloProveedor.findByIdAndDelete(req.body.id);
    console.log(resultado);
    if(resultado){
        res.json({"mensaje": "Proveedor eliminado"});
    } else {
        res.json({"mensaje": "Proveedor no encontrado"});
    }
}

exports.update = async (req, res)=>{
    let resultado = await modeloProveedor.findByIdAndUpdate(req.body.id, {
        "empresa": req.body.empresa,
        "correo": req.body.correo,
        "nombre": req.body.nombre,
        "apellido": req.body.apellido,
        "telefono": req.body.telefono
    });
    console.log(resultado);
    if(resultado){
        res.json({"mensaje": "Proveedor actualizado"});
    } else {
        res.json({"mensaje": "Proveedor no encontrado"});
    }
}