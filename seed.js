'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_CONNECT);
const BookModel = require('./models/book');

async function seedBooks() {
  console.log('seeding books...');

  // creating book #1
  await BookModel.create({
    title: 'I Know Why The Caged Bird Sings',
    description: 'An autobiographical account of the life and experiences of Maya Angelou',
    status: 'NON-FICTION'
    // img: 'http://someURL.com'  // add for each book entry and don't forget comma above if used
  });

  // creating book #2
  await BookModel.create({
    title: 'Lucky You',
    description: 'A comedic tale of an eccentric Floridian who wins a $28MM jackpot and the adventures of trying to claim his winnings.',
    status: 'FICTION STANDALONE'
  });

  // creating book #3
  await BookModel.create({
    title: 'The Apprentice',
    description: 'The hunt for a serial killer ends only to begin again with the hunt for his apprentice.',
    status: 'FICTION SERIAL'
  });

  // creating book #4
  await BookModel.create({
    title: 'DeCartes Secret Notebook',
    description: 'A book about a book that a math dude lost a long time ago.',
    status: 'NON-FICTION'
  });

  mongoose.disconnect();

  console.log('done seeding!');
};

// called the function so it can seed the books
seedBooks();