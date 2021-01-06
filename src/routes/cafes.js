const productsRouter = require('express').Router();
import { getCafes, getCafeById } from 'controllers/products-controller';

productsRouter.get('/', getCafes);
productsRouter.get('/:_id', getCafeById);

module.exports = productsRouter;