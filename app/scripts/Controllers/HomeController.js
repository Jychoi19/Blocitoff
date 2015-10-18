var app = angular.module('Blocitoff');

app.controller("HomeController", function($scope, $firebaseArray) {
    var ref = new Firebase("https://blocitoff1.firebaseio.com/");
  	$scope.tasks = [
    	{ name: 'walk the dog'},
    	{ name: 'buy groceries'},
    	{ name: 'finish bloc assignment'},
    	{ name: 'write a song'}
  	];
});