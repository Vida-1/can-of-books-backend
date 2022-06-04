'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
//const BookModel = require('.models/book'); --not being used so can toss this

const getBooks = require('./modules/handlers');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3002;

// Mongoose
const mongoose = require('mongoose');

// we are connecting to our Mongo DB hosted on Atlas
mongoose.connect(process.env.MONGODB_CONNECT);

// creating an instance of the MongoDB connection and assigning it to a variable
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

// success message from Mongo
db.once('open', function () {
  console.log('Mongoose is connected to Atlas!!')
});

app.get('/books', getBooks);  // setting route
app.get('/test', (request, response) => {
  response.send('test request received')
});

app.use((error, request, response, next) => {
  response.status(500).send(`My Bad! Error occurred in the server! Someone call the developer... ${error.message}`);
});

// very last line of server code  ALWAYS
app.listen(PORT, () => console.log(`listening on ${PORT}`));
