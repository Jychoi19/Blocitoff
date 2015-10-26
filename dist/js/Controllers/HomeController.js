var app = angular.module('Blocitoff');

app.controller("HomeController", ['$scope', '$firebaseArray','$interval', function($scope, $firebaseArray, $interval) {
    var taskRef = new Firebase("https://blocitoff1.firebaseio.com/");
    
    $scope.taskList = $firebaseArray(taskRef);

    $scope.addTask = function(){
        $scope.taskList.$add({
            timestamp: Firebase.ServerValue.TIMESTAMP,
            task: $scope.taskName,
            description: $scope.taskDescription,
        });
        $scope.taskName = "";
        $scope.taskDescription = "";    
    };

    $scope.removeTask = function(index){
        $scope.taskList.$remove(index);
    }

    $interval(function() {
        for (var i = 0; i < $scope.taskList.length; i++) {
            var interval = new Date() - new Date($scope.taskList[i].timestamp); 
<<<<<<< HEAD
            if (interval > 604800000) {
                $scope.removeTask(i);
=======
            console.log(interval);
            if (interval > 604800000) {
                $scope.taskList[i].expired = true;
>>>>>>> hidetasks
            }
        };
    }, 60000);
}]);