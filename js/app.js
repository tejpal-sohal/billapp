"use strict";
var app = angular.module('billApp', ["ngRoute"]);
app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider) {
    $routeProvider
        .when("/bill", {
            templateUrl : "partials/bill.html",
            controller: 'mainCtrl'
        })
        .when("/login", {
            templateUrl : "partials/login.html",
            controller: 'mainCtrl'
        })
        .when("/404", {
            templateUrl : "partials/error.html"
        })
        .when("/about", {
            templateUrl : "partials/about.html"
        })
        .otherwise({
            redirectTo: "/",
            templateUrl : "partials/home.html",
            controller: 'mainCtrl'
        })

    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('');
}]);

