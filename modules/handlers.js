'use strict';

const BookModel = require('../models/book');

async function getBooks(request, response, next) {
  try {
    // pulls everything from the database
    const books = await BookModel.find({});
    response.status(200).sent(books);
  } catch (error) {
    console.error(error);
    // next can pass an error to express for the error middleware to handle
    next(error);
  }
}

// will have to refactor this to export all the functions
module.exports = getBooks;