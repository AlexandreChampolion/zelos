const mongoose = require('mongoose');

const group_schema = new mongoose.Schema({
  label : {
    type: String,
    required: true,
  },

  content: {
    type: String,
    required: true,
  }
});

const Group = module.exports = mongoose.model('Group', group_schema);

// Get Books
module.exports.getGroup = (callback, limit) => {
	Address.find(callback).limit(limit);
}

// Add Book
module.exports.addGroup = (group, callback) => {
  Address.create(group, callback);
}

// Update Book
module.exports.updateGroup = (id, group, options, callback) => {
	var query = {_id: id};
	var update = {
		label: Group.label,
		content: Group.streetName,
	}
	Group.findOneAndUpdate(query, update, options, callback);
}

// Delete Book
module.exports.removeAddress = (id, callback) => {
	var query = {_id: id};
	Group.remove(query, callback);
}
