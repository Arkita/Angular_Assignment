
var app = angular.module('app', ["ngRoute"]);

app.config(function ($routeProvider) {
             
    $routeProvider.when('/Assignment1', {
    templateUrl: 'Assignment1/assignment1.html'
               
     })
    .when("/Assignment2", {
        templateUrl : "Assignment2/assignment2.html",
        controller: "assignment2Controller"
    })
    .when("/Assignment3", {
        templateUrl : "Assignment3/assignment3.html",
        controller: "assignment3Controller"
    })
    .when("/Assignment4", {
        templateUrl : "Assignment4/assignment4.html",
      
    })
    .when("/Assignment5", {
        templateUrl : "Assignment5/assignment5.html",
       controller: "assignment5Controller"
    })
    .when("/Assignment6", {
        templateUrl : "Assignment6/assignment6.html",
       controller: "assignment6Controller"
    })
    .otherwise({
      redirectTo: "/"
     })
 });
