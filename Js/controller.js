/// <reference path="../bower_components/angular/angular.js" />
var app = angular.module('myApp', ['FirstService']).controller('LoginController', function ($scope, login) {
    $scope.CheckData = function () {
        debugger;
        var userName = $scope.username;
        var password = $scope.password;
      
        var promise = login.CheckData(userName, password);
        //var promise = checkdata(userName,password);
        if (promise) {
            alert('welcome to the hell');
        } else {
            alert('invalid user');
        }
    }
});

