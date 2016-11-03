var app = angular.module("MyApp", []);

app.controller("FormController", function ($scope, $http) {

    $scope.formSubmit = function () {
        console.log("yep, works");
    };

});