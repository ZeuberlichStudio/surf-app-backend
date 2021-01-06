const catRouter = require('express').Router();
import { getCategoryById } from 'controllers/categories-controller';

catRouter.get('/:_id', getCategoryById);

module.exports = catRouter;