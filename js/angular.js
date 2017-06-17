/*jslint white:true*/
/*jslint es6 */
/*global angular, XMLHttpRequest,console, XDomainRequest*/
import {xreq} from 'xreq';

var myApp = angular.module('myApp', []),
    api = 'https://api.data.gov/nrel/alt-fuel-stations/v1.json?&api_key=',
    api_key = 'pCvPNRrbY4MMSEOwjbHEvrncKyizOgikI90rLoPV',
    api_limit = '&limit=50',
    api_state = '&state=AL,TX,CA';

myApp.controller('mainController', ['$scope', function ($scope) {
    'use strict';
    $scope.message = "Hell no from Main Controller!!";
}]);

myApp.controller('dataController', ['$scope', function($scope) {
    'use strict';
    //var xhr = xreq("GET", 'https://api.data.gov/nrel/alt-fuel-stations/v1.json?limit=10&api_key=pCvPNRrbY4MMSEOwjbHEvrncKyizOgikI90rLoPV', false, 'application/json');
    var xhr = xreq("GET", api.concat(api_key).concat(api_state).concat(api_limit), false, 'application/json');
    xhr.send();

    var formatter = angular.fromJson(xhr.response);
    $scope.fuels = formatter.station_counts.fuels;
    $scope.total = formatter.station_counts.total;
    $scope.stations = formatter.fuel_stations;

    console.log("xhr.status: " + xhr.status);
    console.log("xhr.statusText: "+ xhr.statusText);
}]);
