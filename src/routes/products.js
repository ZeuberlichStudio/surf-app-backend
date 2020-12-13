const productsRouter = require('express').Router();
import Product from 'models/product';


productsRouter.get( '/', ( req, res ) => {
    const {
        category,
        type
    } = req.query;

    const queryParams = {};

    if ( category ) queryParams.categories = { $in: [category] };
    if ( type ) queryParams.type = { $in: [type] };

    Product.find(queryParams)
        .then( data => res.send(data) )
        .catch( err => res.send(err) );
});

productsRouter.get( '/slug=:slug', ( req, res ) => {
    const {
        slug
    } = req.params;

    Product.find({ slug: { $eq: slug } })
        .then( data => res.send(data[0]) )
        .catch( err => res.send(err) );
});

module.exports = productsRouter;