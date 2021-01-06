import Product from 'models/product';

exports.getProducts = async (req, res, next) => {
    const { cat } = req.query;

    const query = Product.find({ cat }).exec();

    try {
        const result = await query;
        res.json(result);
    } catch (err) {
        next(err);
    }
}

exports.getProductById = async (req, res, next) => {
    const { _id } = req.params;

    const query = Product.findOne({ _id }).exec();

    try {
        const result = await query;
        res.json(result);
    } catch (err) {
        next(err);
    }
}