var Log = require('./logModel');

module.exports = {
	allLogs: function(req, res) {
		Log.find({}, function (err, logs) {
			if (err) {
				console.log('error finding logs');
				throw err;
			}
			res.status(200);
			res.send(logs);
		})
		
	},

	newLog: function(req, res) {
		// console.log("new log: ", req.body);
		// res.send(200);

		Log.create(req.body, function (err, log) {
  			if (err) throw err;
  			else {
  				console.log("entry created");
  				res.send(200);
  			}
		});
	}
}