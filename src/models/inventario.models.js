const mongo= require('../config/conection')

const SchemaInventario= new mongo.Schema({

    userId:{
        type:mongo.Schema.Types.ObjectId,
        ref: 'usuario'
    },

    producId:{
        type:mongo.Schema.Types.ObjectId,
        ref:'producto'
    },

    tipo_de_producto:{
        type:String,
        required:true,
        maxLength:50,
        minLength:5,
    },

    cantidad:{
        type:Number,
        default:0,
        min:0
    },

    valor_compra:{
        type:Number,
        default:0,
        min:0,
    },

    valor_venta:{
        type:Number,
        default:0,
        min:0,
    },

    descripcion:{
        type:String,
        required:true,
        maxLength:100,
        minLength:50,
    }

    
})
