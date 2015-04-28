var Log = require('./logModel');

module.exports = {
	allLogs: function(req, res) {

		
	},

	newLog: function(req, res) {
		log.create(req.body, function (err, log) {
  			if (err) throw err;
  			else {
  				res.send(200);
  			}
		});
	}
}