var app = angular.module("Blocitoff", ['ui.router', 'firebase', 'ngMaterial']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode({
         enabled: true,
         requireBase: false
     });
    $urlRouterProvider.otherwise("/active");
    $stateProvider
     	.state('active', {
        	url: '/active',
         	controller: 'ActiveController',
         	templateUrl: '/templates/active.html'
     	}),
    $stateProvider
    .state('complete', {
        url: '/complete',
        controller: 'CompleteController',
        templateUrl: '/templates/complete.html'
    })    
 });
