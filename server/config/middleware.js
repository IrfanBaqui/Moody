var morgan = require('morgan');
var bodyParser = require('body-parser');
var helpers = require('./helpers');

module.exports= function (app, express) {

	var logRouter = express.Router();
	var userRouter = express.Router();

	app.use(morgan('dev'));
	app.use(bodyParser.json());
	app.use(express.static(__dirname + '/../../client'));
	console.log("dir: ", __dirname + '/../../client');

	app.use('/api/users', userRouter);
	app.use('/api/logs', logRouter);
  	
  	app.use(helpers.errorLogger);
  	app.use(helpers.errorHandler);

  	require('../users/userRoutes.js')(userRouter);
  	require('../logs/logRoutes.js')(logRouter);
}