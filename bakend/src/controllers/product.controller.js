const prod = require('../data/product.data');

exports.addproduct = async (req, res) => {
    try {
        const productIsRegistered = await prod.findProduct({ nombre_producto: req.body.nombre_producto }, { nombre_producto: 1 });
        if (productIsRegistered) {
            return res.status(400).json({ message: 'Product already registered' });
        }
        const Product = await prod.createProduct(req.body);
        return res.status(200).json({ message: 'Product registered successfully'});
    } catch (error) {
        console.error(error);
        return res.render('500', { error: error });
    }
};