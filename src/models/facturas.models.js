const mongo= require('../config/conection')


const schemaFacturas= new mongoose.Schema({
    cliente:{
    type: mongo.Schema.Types.ObjectId,
    ref: 'cliente'

    },

    valor_pedido:{
        type:Number,
        min:0,

    },

    valor_total:{
        type:Number,
        min:0,
    },

    fecha_factura:{
        type:Date,
        default:Date.now
    },
})


const factura = mongoose.model("factura", schemaFacturas);
module.exports = factura;