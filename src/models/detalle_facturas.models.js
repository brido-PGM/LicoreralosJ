const mongo= require('../config/conection')


const schemaDetalles_facturas=new mongoose.Schema({
    producId:{
        type:mongo.Schema.Types.ObjectId,
        ref:'producto'
    },

    factuId:{
        ype:mongo.Schema.Types.ObjectId,
        ref:'factura'
    }


}    
)
const modeloDetalles_facturas = modelo.model('detalles_factura', schemaDetalles_facturas);
module.exports = modeloDetalles_facturas
