var app = angular.module("MyApp", []);

app.controller("FormController", function ($scope, $http) {

    $scope.formSubmit = function (event, id) {

        var formData = $('#' + id).serializeArray();

        /*
         * serializeArray ended up returning four objects in an array, each with 
         * two sets of key/value pairs which deviated from the format i was looking for:
         * "name": "value of name",
         * "value": "value of value"
         */

        var mappedData = formData.map(function (obj) {
            var input = {};
            input[obj.name] = obj.value;
            return input;
        });

        /* my solution was to use the map method to modify each object in the array to make
         * a single key/value pair in each object:
         * "name value": "value of value"
         */

        var jsonifiedData = JSON.stringify(mappedData);

        $http.post("/api/AngularApi", jsonifiedData)
            .then(console.log(jsonifiedData));

        /* first pass */

        event.preventDefault();
    };

});