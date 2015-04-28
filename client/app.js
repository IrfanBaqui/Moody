var app = angular.module('moody', [
																		'ui.bootstrap', 
																		'ui.bootstrap.accordion',
																		'moody.logs',
																		
																	]);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	when('/newLog', {
		templateUrl: './app/Logs/newLog.html',
		controller: 'newLogController'
	}).
	when('/allLogs', {
		templateUrl: './app/Logs/logs.html',
		controller: 'logController'
	}).
	when('/trendline', {
		templateUrl: './app/Logs/trendline.html',
		controller: 'logController'
	}).
	otherwise({
		redirectTo: '/allLogs'
	});	

}]);
