const mongo = require('../config/conection')

const schemaProveedor = new mongo.Schema({
    adminId: {
        type: mongo.Schema.Types.ObjectId,
        ref: 'usuario'
    },
    empresa: {
        type: String,
        required: true,
        maxLength: 100
    },
    correo: {
        type: String,
        maxLength: 50
    },
    nombre: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 50
    },
    apellido: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 50
    },
    telefono: {
        type: Number,
        default: 0,
        min: 0
    }
},{versionKey: false});

const modeloProveedor = modelo.model('proveedor', schemaProveedor);
module.exports = modeloProveedor