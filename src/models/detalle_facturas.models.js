const mongo= require('../config/conection')


const schema_detalles_facturas=new mongoose.Schema({
    producto_id:{
        type:mongo.Schema.Types.ObjectId,
        ref:'producto'
    },
    factura_id:{
        ype:mongo.Schema.Types.ObjectId,
        ref:'factura'
    }
},{versionKey: false});

const modelo_detalles_facturas = mongo.model('detalles_facturas', schema_detalles_facturas);
module.exports = modelo_detalles_facturas
