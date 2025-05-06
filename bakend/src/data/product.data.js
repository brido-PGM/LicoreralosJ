const product = require('../models/producto.model')

exports.findProduct = async (filter, projection) => {
    try {
        if (!projection) return await product.findOne(filter);
        else return await product.findOne(filter, projection);
    } catch (error) {
        console.error('Error finding product:', error);
        throw error;
    }
};

exports.createProduct = async (productInfo) => {
    try {
        return new product(productInfo).save();
    } catch (error) {
        return error;
    }
};