import { Schema, model } from 'mongoose';

//Cafe instances wiil be used to set a pick up point in order
//and to render the cafes map screen  
const cafeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true,
        unique: true
    },
    location: {
        type: String,
        required: true,
        unique: true
    }
});

const Cafe = model( 'Cafe', ingredientSchema );

export default Cafe;