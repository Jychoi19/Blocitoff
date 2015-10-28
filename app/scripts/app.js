var app = angular.module("Blocitoff", ['ui.router', 'firebase', 'ngMaterial']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode({
         enabled: true,
         requireBase: false
     });
    $urlRouterProvider.otherwise("/home");
    $stateProvider
     	.state('home', {
        	url: '/home',
         	controller: 'HomeController',
         	templateUrl: '/templates/home.html'
     	}),
    $stateProvider
    .state('complete', {
        url: '/complete',
        controller: 'CompleteController',
        templateUrl: '/templates/complete.html'
    })    
 });
