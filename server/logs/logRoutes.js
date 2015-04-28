var logController = require('./logController.js');

module.exports = function (app) {

	app.route('/')
		.get(logController.allLogs)
		.post(logController.newLog)
}