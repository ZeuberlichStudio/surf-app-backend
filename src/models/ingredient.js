import { Schema, model } from 'mongoose';

//We'll need them later for making addons to drinks
//if we are managing to deliver the rest of the app in time
const ingredientSchema = new Schema({
    name: String,
    price: Number
});

const Ingredient = model( 'Ingredient', ingredientSchema );

export default Ingredient;