const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const User = require('../models/User');

router.get('/users', (req, res, next) => {
	User.find().populate('users')
		.then(allUsers => {
			res.json(allUsers);
		})
		.catch(err => {
			res.json(err);
		})
});


module.exports = router;
