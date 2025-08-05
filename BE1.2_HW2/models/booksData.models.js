const mongoose = require('mongoose');

const bookDataSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  publishedYear: {
    type: Number,
    required: true
  },
  genre: {
    type: [String],
    required: true
  },
  language: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  summary: {
    type: String,
    required: true
  },
  coverImageUrl: {
    type: String,
    required: true
  }
});

const bookData = mongoose.model('Bookdata', bookDataSchema);

module.exports = bookData;
