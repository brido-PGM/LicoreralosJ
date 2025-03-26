const mongo = require('../config/conection')

const schema_inventario = new mongo.Schema({
    user_id: {
        type: mongo.Schema.Types.ObjectId,
        ref: 'usuario'
    },
    producto_id: {
        type: mongo.Schema.Types.ObjectId,
        ref: 'producto'
    },
    tipo_de_producto: {
        type: String,
        required: true,
        maxLength: 50,
        minLength: 5,
    },
    cantidad: {
        type: Number,
        default: 0,
        min: 0
    },
    valor_compra: {
        type: Number,
        default: 0,
        min: 0,
    },
    valor_venta: {
        type: Number,
        default: 0,
        min: 0,
    },
    descripcion: {
        type: String,
        required: true,
        maxLength: 100,
        minLength: 50,
    }
},{versionKey: false});

const modelo_inventario = mongo.model('inventario', schema_inventario);
module.exports = modelo_inventario
