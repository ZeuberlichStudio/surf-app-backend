import Cafe from 'models/cafe';

exports.getCafes = async (req, res, next) => {
    const query = Cafe.find().exec();

    try {
        const result = await query;
        res.json(result);
    } catch (err) {
        next(err);
    }
}

exports.getCafeById = async (req, res, next) => {
    const { _id } = req.params;

    const query = Cafe.findOne({ _id }).exec();

    try {
        const result = await query;
        res.json(result);
    } catch (err) {
        next(err);
    }
}