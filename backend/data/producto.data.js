const Producto = require('../models/producto.model.js');

exports. findProducto= async (filter, projection) => {
    try{
        if (!projection) return await Producto.findOne(filter);
        else return await Producto.findOne(filter, projection);
    }catch (error) {
        return error;
    }
};

exports.createProducto= async (productoInfo) => {
    try {
        return new Producto (productoInfo).save();
    }
    catch (error) {
        return error;
    }    
}

exports.updateProducto= async (filter, update) => {

}


exports.deleteProducto= async (filter) => {

}



async function insert(filter, projection) {}