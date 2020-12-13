import { Schema, model } from 'mongoose';

const ingredientSchema = new Schema({
    name: String,
    slug: String,
    price: Number
});

const Ingredient = model( 'Ingredient', ingredientSchema );

export default Ingredient;