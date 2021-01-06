const ordersRouter = require('express').Router();
import { getOrderById, createOrder } from 'controllers/orders-controller';

ordersRouter.get('/:_id', getOrderById);
ordersRouter.post('/', createOrder);

module.exports = ordersRouter;