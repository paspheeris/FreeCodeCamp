const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const urlSchema = new Schema({
  original_url: {
    type: String,
    required: true
  },
  short_url: {
    type: String,
    required: true
  }
});
const counter = new Schema({
  counter: {
    type: Number,
    required: true
  }
});

const URL = mongoose.model('URL', urlSchema);
const Counter = mongoose.model('Counter', counter);

module.exports = URL;