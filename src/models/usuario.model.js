const mongo = require('../config/conection')

const schema_usuario = new mongo.Schema({
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
    cuenta: {
        type: String,
        enum: ['Administrador', 'Cliente'],
        default: 'Cliente'
    },
    telefono: {
        type: Number,
        default: 0,
        min: 0
    },
    direccion: {
        type: String,
        minLength: 30,
        maxLength: 100
    },
    correo: {
        type: String,
        maxLength: 50
    }
},{versionKey: false});

const modelo_usuario = mongo.model('usuario', schema_usuario);
module.exports = modelo_usuario
