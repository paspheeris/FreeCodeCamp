const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const queryHistorySchema = new Schema({
  searchTerm: {
    type: String,
    required: 'A search term must be provided'
  },
  when: {
    type: Date,
    required: 'A date must be provided'
  }
});

const QueryHistory = mongoose.model('QueryHistory', queryHistorySchema);
module.exports = QueryHistory;