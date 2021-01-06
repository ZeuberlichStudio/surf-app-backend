import Category from 'models/category';

exports.getCategoryById = async (req, res, next) => {
    const { _id } = req.params;

    const query = Category.findOne({ _id }).exec();

    try {
        const result = await query;
        res.json(result);
    } catch (err) {
        next(err);
    }
}