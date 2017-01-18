var myApp = angular.module('myApp', ['chart.js', 'ngRoute'])
myApp.controller('myController', function ($scope, $http) {

    $http.get('counter.json').success(function (data) {
        $scope.mainInfo = data;
        var operators = [];
        var occurrences = [];


        for (var key  in $scope.mainInfo) {
            if ($scope.mainInfo.hasOwnProperty(key) && $scope.mainInfo[key] > 20) {
                operators.push(key);
                occurrences.push($scope.mainInfo[key]);
                $scope.mainInfo[key] = $scope.mainInfo[key] * 100 / 5292
            }
        }
        console.log(operators);
        console.log(occurrences);
        $scope.labels = operators;
        $scope.data = occurrences;
        $scope.type = 'polarArea';

        $scope.toggle = function () {
            $scope.type = $scope.type === 'polarArea' ?
                'pie' : 'polarArea';
        };
    });


});

myApp.controller('myController2', function ($scope, $http) {

    $http.get('Category.json').success(function (data) {
        $scope.mainInfo = data;
        var operators = [];
        var occurrences = [];

        for (var key  in $scope.mainInfo) {
            if ($scope.mainInfo.hasOwnProperty(key) && $scope.mainInfo[key] > 20) {
                operators.push(key);
                occurrences.push($scope.mainInfo[key]);
                $scope.mainInfo[key] = $scope.mainInfo[key] * 100 / 5292
            }
        }
        console.log(operators);
        console.log(occurrences);
        $scope.labels = operators;
        $scope.data = occurrences;
        $scope.type = 'polarArea';

        $scope.toggle = function () {
            $scope.type = $scope.type === 'polarArea' ?
                'pie' : 'polarArea';
        };
    });


});

myApp.controller('myController3', function ($scope, $http) {

    $http.get('Route.json').success(function (data) {
        $scope.mainInfo = data;
        var operators = [];
        var occurrences = [];

        for (var key  in $scope.mainInfo) {
            if ($scope.mainInfo.hasOwnProperty(key) && $scope.mainInfo[key] > 3) {
                operators.push(key);
                occurrences.push($scope.mainInfo[key]);
                $scope.mainInfo[key] = $scope.mainInfo[key] * 100 / 5292
            }
        }
        console.log(operators);
        console.log(occurrences);
        $scope.labels = operators;
        $scope.data = occurrences;

    });


});

myApp.controller('myController4', function ($scope, $http) {

    $http.get('Date.json').success(function (data) {
        $scope.mainInfo = data;
        var operators = [];
        var occurrences = [];

        for (var key  in $scope.mainInfo) {
            if ($scope.mainInfo.hasOwnProperty(key) && $scope.mainInfo[key] > 2) {
                operators.push(key);
                occurrences.push($scope.mainInfo[key]);
                $scope.mainInfo[key] = $scope.mainInfo[key] * 100 / 5292
            }
        }
        console.log(operators);
        console.log(occurrences);
        $scope.labels = operators;
        $scope.series = ['Series A'];

  $scope.data = occurrences;
    });


});

myApp.filter('toDictionaryArray', function () {
    return function (obj) {
        if (!(obj instanceof Object)) return obj;

        var arr = [];
        for (var key in obj) {
            arr.push({key: key, value: obj[key]});
        }
        return arr;
    }
})
myApp.config(function ($routeProvider) {
    //noinspection JSUnresolvedFunction
    $routeProvider
        .when('/', {templateUrl: 'home.html', controller: 'myController'})
        .when('/chart1', {templateUrl: 'chart1.html', controller: 'myController'})
        .when('/table1', {templateUrl: 'table1.html', controller: 'myController'})
        .when('/chart2', {templateUrl: 'chart2.html', controller: 'myController2'})
        .when('/table2', {templateUrl: 'table2.html', controller: 'myController2'})
        .when('/chart3', {templateUrl: 'chart3.html', controller: 'myController3'})
        .when('/table3', {templateUrl: 'table3.html', controller: 'myController3'})
        .when('/chart4', {templateUrl: 'chart4.html', controller: 'myController4'})
        .when('/table4', {templateUrl: 'table4.html', controller: 'myController4'})
        .otherwise({redirectTo: '/'});
});