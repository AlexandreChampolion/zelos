const mongoose = require('mongoose');

const type_schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  }
});

const Type = module.exports = mongoose.model('type', type_schema);
