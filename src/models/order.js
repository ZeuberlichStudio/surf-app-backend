import { Schema, model, SchemaTypes } from 'mongoose';

const orderSchema = new Schema({
    items: [SchemaTypes.Mixed],
    customer: SchemaTypes.ObjectId,
    cafe: {
        type: SchemaTypes.ObjectId,
        ref: 'Cafe'
    },
    readyBy: SchemaTypes.Date,
    status: String,
    discount: Number,
    sum: Number,
    total: Number
}, {
    timestamps: true
});

const Order = model('Order', orderSchema);

module.exports = Order;