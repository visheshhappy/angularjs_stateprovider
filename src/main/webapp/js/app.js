var myapp = angular.module('MyApp',['ui.router']);

myapp.config(function($stateProvider,$urlRouterProvider){

// Heirarchy..
/*page1 : link1, page2 : {link4 , link5 : {link6}}*/

 $urlRouterProvider.otherwise('/');
$stateProvider
	.state('page1',{
		url: '/page1',
		templateUrl : 'pages/page1.html'
	})
	.state('page2',{
		url: '/page2',
		templateUrl : 'pages/page2.html'
	})
	.state('page1.link1',{
		url: '/link1',
		views :{
			"viewA" : {
				  templateUrl: 'pages/link1.html',
        		  controller : 'Link1Controller'
			},
			"viewB" : {
				 templateUrl: 'pages/link1_B.html',
        		  controller : 'Link1Controller_B'
			}
		}
      
	})
	.state('page2.link4',{
		url: '/link4',
		templateUrl : 'pages/link4.html'
	})
	.state('page2.link5',{
		url: '/link5',
		templateUrl : 'pages/link5.html'
	})
	.state('page2.link5.link6',{
		url: '/link6',
		templateUrl : 'pages/link6.html',
		controller : 'Link6Controller'
	});

});



myapp.controller('Link1Controller',['$scope','$log',function($scope,$log){
	$scope.myList = ["apple","bannans","oranges"];
}]);

myapp.controller('Link1Controller_B',['$scope','$log',function($scope,$log){
	$scope.myList = ["tomatoes","potatoes","brinjal"];
}]);

myapp.controller('Link6Controller',['$scope','$log',function($scope,$log){
	$scope.myList = ["football", "cricket" ,"basketball" ,"hockey"];
}])