const mongoose = require('mongoose');

const user_schema = new mongoose.Schema({
  firstname : {
    type: String,
    required: true,
  },

  lastname : {
    type: String,
    required: true,
  },

  birthdate : {
    type: Number,
    required: true,
  },

  login : {
    type: String,
    required: true,
  },

  password : {
    type: String,
    required: true,
  },

  idGroup: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'group_schema',
  }
});

const User = module.exports = mongoose.model('User', user_schema);

// Get Books
module.exports.getUsers = (callback, limit) => {
	User.find(callback).limit(limit);
}

// Get Book
module.exports.getUserById = (id, callback) => {
	User.findById(id, callback);
}

// Add Book
module.exports.addUser = (user, callback) => {
	User.create(user, callback);
  Address.create(address, callback);
}

// Update Book
module.exports.updateUser = (id, user, options, callback) => {
	var query = {_id: id};
	var update = {
		firstname: User.firstname,
		lastname: User.lastname,
		birthdate: User.birthdate,
		login: User.login,
		password: User.password,
		buy_url: User.buy_url
	}
	User.findOneAndUpdate(query, update, options, callback);
}

// Delete Book
module.exports.removeUser = (id, callback) => {
	var query = {_id: id};
	User.remove(query, callback);
}
