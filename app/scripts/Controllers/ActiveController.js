var app = angular.module('Blocitoff');

app.controller("ActiveController", ['$scope', '$firebaseArray','$interval', function($scope, $firebaseArray, $interval) {
	var taskRef = new Firebase("https://blocitoff1.firebaseio.com/");
	
	$scope.title = "Active Tasks";
	$scope.taskList = $firebaseArray(taskRef);

	$scope.addTask = function(){
		$scope.taskList.$add({
			timestamp: Firebase.ServerValue.TIMESTAMP,
			task: $scope.taskName,
			description: $scope.taskDescription,
			done: false,
			critical: false
		});
		$scope.taskName = "";
		$scope.taskDescription = "";    
	};

	$scope.removeTask = function(index){
		$scope.taskList.$remove(index);
	};

	$scope.saveTask = function(task){
		$scope.taskList.$save(task);
	};

	$scope.togglePriority = function(task, event) {
		event.stopImmediatePropagation();
		task.critical = !task.critical;
		$scope.saveTask(task);
	};

	$scope.expiredTask = function() {
		for (var i = 0; i < $scope.taskList.length; i++) {
			var interval = new Date() - new Date($scope.taskList[i].timestamp); 
			if (interval > 604800000) {
				$scope.taskList[i].expired = true;
			}
		};
	};

	$scope.taskList.$loaded().then($scope.expiredTask);
	$interval($scope.expiredTask, 60000);
}]);
