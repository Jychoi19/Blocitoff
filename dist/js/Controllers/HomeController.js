var app = angular.module('Blocitoff');

app.controller("HomeController", ["$firebaseArray", function($scope, $firebaseArray) {
    var ref = new Firebase("https://blocitoff1.firebaseio.com/");
}]);