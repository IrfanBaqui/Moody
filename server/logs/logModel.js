var mongoose = require('mongoose');

var logSchema = new mongoose.Schema({
	picture: String,
	happiness: Number,
	comment: String,
	time: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Log', logSchema);