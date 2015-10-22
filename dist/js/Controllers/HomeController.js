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

    // $scope.showTask = true;

    // $timeout(function() {
    //     $scope.showTask = false;
    // }, 5000);

}]);