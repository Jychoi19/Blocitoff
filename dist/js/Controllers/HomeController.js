var app = angular.module('Blocitoff');

app.controller("HomeController", function($scope, $firebaseArray) {
    var ref = new Firebase("https://blocitoff1.firebaseio.com/");
  	$scope.tasks = [
    	{ name: 'walk the dog', info: "take the dog for a walk around the block"},
    	{ name: 'buy groceries', info: "carrots, potatoes, tomatoes, some fruits, etc..."},
    	{ name: 'finish bloc assignment', info: "try to finish this project"},
    	{ name: 'write a song', info: "finish the 3-4 songs you're currently working on"}
  	];
});