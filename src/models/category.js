import { Schema, model } from 'mongoose';

const catSchema = new Schema({
    name: String,
    type: String, //drinks or food
    images: { 
        title: String
    }
});

const Category = model( 'Category', catSchema );

export default Category;