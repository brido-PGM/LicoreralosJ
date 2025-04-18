
const mongo = require('../config/conection')

const schema_producto = new mongo.schema({
    nombre_producto: {
        type: String,
        required: true,
        maxLength: 100,
    },
    tipo_producto: {
        enum: ['Vino', 'Ron', 'Cerveza', 'Vodka', 'Wisky', 'Tequila', 'Guaro', 'Champan']
    },
    medidas: {
        type: String,
        required: true,
        maxLength: 100,
    },
    precio: {
        type: Number,
        required: true,
        min: 0
    },
    descripcion: {
        type: String,
        maxLength: 200
    },
    cantidad: {
        type: Number,
        min: 0
    }
},{versionKey: false});

const modelo_producto = mongo.model('producto', schema_producto);
module.exports = modelo_producto
