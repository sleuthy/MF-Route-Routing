"use strict";

var app = angular.module("RouteRouting", ['ngRoute']);

 app.config(function($routeProvider){
 	$routeProvider.
 	when('/highway1', {
 		templateUrl: 'partials/highway1.html',
 		controller: 'highway1Ctrl'
 	}).
 	when('/highway2', {
 		templateUrl: 'partials/highway2.html',
 		controller: 'highway2Ctrl'
 	}).
 	otherwise('/');
 });