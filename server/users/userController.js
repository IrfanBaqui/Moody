var User = require('./userModel.js');

module.exports = {
	signup: function(req, res, next) {
		var username = req.body.username;
		var password = req.body.password;

		User.create({username: username, password: password}, function (err, user) {
  			if (err) throw err;
  			else {
  				res.send(200);
  			}
		});
	},

	signin: function (req, res, next) {
		var username = req.body.username;
    var password = req.body.password;

	
	},

	checkAuth: function (req, res, next) {

	}
}