import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import db from './db';

require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/static', express.static('./static'));

app.use('/products', require('routes/products'));
app.use('/categories', require('routes/categories'));
app.use('/cafes', require('routes/categories'));
app.use('/orders', require('routes/categories'));

const { PORT } = process.env;

app.listen(PORT || 3001, () => console.log('App is running.', `Port ${ PORT || 3001 }`));