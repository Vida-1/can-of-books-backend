'use strict';

const BookModel = require('../models/book');

async function getBooks(request, response, next) {
  try {
    // pulls everything from the database
    const books = await BookModel.find({});
    response.status(200).send(books);

// ERROR HANDLING TESTING PURPOSES ONLY: This should cause an error that'll end up in the catch() below and then send to the middleware in the server.js
    // let dataThatDoesntExist = require('./this-data-does-not-exist.js');
    // response.send(dataThatDoesntExist);
    
  } catch (error) {
    console.error(error);
    // next can pass an error to express for the error middleware to handle
    next(error);
  }
}

// will have to refactor this to export all the functions
module.exports = getBooks;