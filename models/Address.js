const mongoose = require('mongoose');

const address_schema = new mongoose.Schema({
  streetNum: {
    type: Number,
    required: true,
  },

  streetName: {
    type: String,
    required: true,
  },

  city: {
    type: String,
    required: true,
  },

  borought: {
    type: Number,
    required: true,
  },

  idType{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'type_schema',
  },

  idUser{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user_schema',
  }
});

const Address = module.exports = mongoose.model('Address', address_schema);

// Get Books
module.exports.getAddress = (callback, limit) => {
	Address.find(callback).limit(limit);
}

// Get Book
module.exports.getUserById = (id, callback) => {
	Address.findById(id, callback);
}

// Add Book
module.exports.addAddress = (address, callback) => {
  Address.create(address, callback);
}

// Update Book
module.exports.updateAddress = (id, address, options, callback) => {
	var query = {_id: id};
	var update = {
		streetNum: Address.streetNum,
		streetName: Address.streetName,
		city: Address.city,
		borought: Address.borought,
	}
	User.findOneAndUpdate(query, update, options, callback);
}

// Delete Book
module.exports.removeAddress = (id, callback) => {
	var query = {_id: id};
	Address.remove(query, callback);
}
