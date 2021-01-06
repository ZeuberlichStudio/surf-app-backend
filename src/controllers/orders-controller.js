import Order from 'models/order';

exports.getOrderById = async (req, res, next) => {
    const { _id } = req.params;

    const query = Order.findOne({ _id }).exec();

    try {
        const result = await query;
        res.json(result);
    } catch (err) {
        next(err);
    }
}

exports.createOrder = async (req, res, next) => {
    const orderObj = req.body;

    const query = Order.create(orderObj).exec();

    try {
        const result = await query;
        res.json(result);
    } catch (err) {
        next(err);
    }
}