import { Schema, model } from 'mongoose';

const productSchema = new Schema({
    name: String,
    slug: {
        type: String,
        unique: true
    },
    images: {
        photo: String,
        background: String
    },
    desc: String,
    categories: [String],
    type: String,
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

