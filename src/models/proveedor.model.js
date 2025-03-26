const mongo = require('../config/conection')

const schema_proveedor = new mongo.Schema({
    admin_id: {
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

const modelo_proveedor = mongo.model('proveedor', schema_proveedor);
module.exports = modelo_proveedor
