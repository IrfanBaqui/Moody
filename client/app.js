var app = angular.module('moody', [
																		'ui.bootstrap', 
																		'ui.bootstrap.accordion',
																		'moody.logs'
																	]);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	when('/newLog', {
		templateUrl: './app/Logs/newLog.html',
		controller: 'logController'
	}).
	when('/allLogs', {
		templateUrl: './app/Logs/allLogs.html',
		controller: 'logController'
	}).
	otherwise({
		redirectTo: '/allLogs'
	});	

}]);


app.controller('main', function($scope, $http) {
	$scope.text = 'hello';
	$scope.newLog = function() {
		$http.get('/api/logs/newLog').
	  success(function(data, status, headers, config) {
	  	console.log('success');
	  }).
	  error(function(data, status, headers, config) {
	  	console.log("newLog GET unsuccessful");
	  });
	}

	$scope.loadAllLogs = function() {

	}
});


