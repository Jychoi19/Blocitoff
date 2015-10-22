var app = angular.module('Blocitoff');

app.controller("HomeController", ['$scope', '$firebaseArray','$timeout', function($scope, $firebaseArray, $timeout) {
    var taskRef = new Firebase("https://blocitoff1.firebaseio.com/");
    
    $scope.taskList = $firebaseArray(taskRef);

    // Add item to taskList
    $scope.addTask = function(){
        var timestamp = new Date().valueOf();
        $scope.taskList.$add({
            id: timestamp,
            task: $scope.taskName,
            description: $scope.taskDescription,
        });
        $scope.taskName = "";
        $scope.taskDescription = "";
    };

    // Remove item from taskList
    $scope.removeTask = function(index){
        $scope.taskList.$remove(index);
    }

    // $scope.taskList = true;

    // $timeout(function() {
    //     if ($scope.taskList.id > 1000) 
    //         $scope.taskList = false;
    // }, 5000);

}]);