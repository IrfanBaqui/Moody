var mongoose = require('mongoose');

var logSchema = new mongoose.Schema({
	mood: String,
	happiness: Number,
	text: String,
	time: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Log', logSchema);