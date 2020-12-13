const catRouter = require('express').Router();
import Category from 'models/category';


catRouter.get( '/', ( req, res ) => {
    Category.find()
        .then( data => res.send(data) )
        .catch( err => res.send(err) );
});

module.exports = catRouter;