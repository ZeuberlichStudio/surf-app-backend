const productsRouter = require('express').Router();
import { getProducts, getProductById } from 'controllers/products-controller';

productsRouter.get('/', getProducts);
productsRouter.get('/:_id', getProductById);

module.exports = productsRouter;