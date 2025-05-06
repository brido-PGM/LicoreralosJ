const mongo= require('../config/conection')


const schema_facturas= new mongoose.Schema({
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
},{versionKey: false});

const factura = mongo.model("factura", schema_facturas);
module.exports = factura;
