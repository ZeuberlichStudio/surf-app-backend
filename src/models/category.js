import { Schema, model } from 'mongoose';

const catSchema = new Schema({
    name: String,
    slug: {
        type: String,
        unique: true
    },
    type: String,
    images: { 
        title: String
    }
});

const Category = model( 'Category', catSchema );

export default Category;