var moodyLogs = angular.module('moody.logs', ['ngRoute']);

moodyLogs.controller('logController', function($scope, $http) {
	$scope.mood = {
		picture: 'laughing',
		happiness: 5,
		comment: "All good"
	};

	$scope.allLogs;

	$scope.logData = function() {
		$http.post('/api/logs/', $scope.mood)
		.success(function (data, status, header, config) {
			console.log('post request success');
		})
		.error(function (data, status, headers, config) {
			console.log('post request failed');
		});

		$scope.getData();
	}

	$scope.getData = function() {
		$http.get('/api/logs/')
		.success(function(data, status) {
			console.log(data);
			$scope.allLogs = data;
		})
		.error(function(data, status) {

		});
	}

});

