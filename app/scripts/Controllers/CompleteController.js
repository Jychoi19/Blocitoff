var app = angular.module('Blocitoff');

app.controller("CompleteController", ['$scope', '$firebaseArray','$interval', '$controller', function($scope, $firebaseArray, $interval, $controller) {
    $controller('HomeController', {$scope: $scope});
    $scope.title = "Completed";
}]);
