const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

User = require('./models/User');

mongoose.connect('mongodb://localhost/zelos');
var db = mongoose.connection;

app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.send('Please use /api/users or /api/groups');
});

app.get('/api/users', (req, res) => {
	User.getUsers((err, user) => {
		if(err){
			throw err;
		}
		res.json(user);
	});
});

app.get('/api/users/:_id', (req, res) => {
	User.getUserById(req.params._id, (err, user) => {
		if(err){
			throw err;
		}
		res.json(user);
	});
});

app.post('/api/users', (req, res) => {
	var user = req.body;
	User.addUser(user, (err, user) => {
		if(err){
			throw err;
		}
		res.json(user);
	});
});

app.put('/api/users/:_id', (req, res) => {
	var id = req.params._id;
	var user = req.body;
	User.updateUser(id, user, {}, (err, user) => {
		if(err){
			throw err;
		}
		res.json(user);
	});
});

app.delete('/api/users/:_id', (req, res) => {
	var id = req.params._id;
	User.removeUser(id, (err, user) => {
		if(err){
			throw err;
		}
		res.json(user);
	});
});

var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log('listening on 3000')
});

module.exports = app;
