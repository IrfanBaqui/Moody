var moodyLogs = angular.module('moody.logs', ['ngRoute']);

moodyLogs.controller('newLogController', function($scope, $http, $location) {
	$scope.mood = {
		picture: 'smiling',
		happiness: 8,
		comment: "All good"
	};

	$scope.logData = function() {
		$http.post('/api/logs/', $scope.mood)
		.success(function (data, status, header, config) {
			console.log('post request success');
			$location.path('/logs');
		})
		.error(function (data, status, headers, config) {
			console.log('post request failed');
		});
	}

});


moodyLogs.controller('logController', function($scope, $http, $location) {

	$scope.logs = {};

	$scope.init = function() {
		$scope.loadData();
		console.log($scope.logs.data);
	}

	$scope.loadData = function () {
		$scope.getData()
		.then(function(response) {
			console.log(response.data);
			$scope.logs.data = response.data;
		});
	}

	$scope.getData = function() {
		return $http.get('/api/logs/')
		.success(function(response, status) {
			return response;
		})
		.error(function(data, status) {
			console.log("getData failed");
			throw err;
		});
	}

	$scope.getData()

	$scope.init();

});
