import { Schema, model, SchemaTypes } from 'mongoose';

const productSchema = new Schema({
    name: String,
    images: {
        photo: String,
        background: String
    },
    desc: String,
    cat: {
        type: SchemaTypes.ObjectId,
        ref: 'Category'
    },
    special: Boolean,
    sizes: {
        small: {
            volume: String,
            price: Number
        },
        reg: {
            volume: String,
            price: Number
        },
        big: {
            volume: String,
            price: Number
        },
    }
});

const Product = model( 'Product', productSchema );

export default Product;

