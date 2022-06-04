// Lab 11 - Featured Task
// Build a Mongoose 'Book' schema with valid keys for `title`, `description`, and`status`. 

'use strict';

const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, uppercase: true, enum: ['FICTION SERIAL', 'FICTION STANDALONE', 'NON-FICTION'] }
  // img: { type: String } // if used don't forget comma above
});

// Use your schema to craft a book model
const bookModel = mongoose.model('book', bookSchema);

module.exports = bookModel;