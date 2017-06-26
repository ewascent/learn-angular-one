/*jslint white:true*/
/*global angular, XMLHttpRequest,console, XDomainRequest*/
angular.module('myApp').controller('thinController', ['$scope', function( $scope, xreq, FuelFactory ) {
    'use strict';

    $scope.http.push(new FuelFactory(xreq));

    //formatter = xhr.response;
    $scope.fuels = $scope.http.xhr.response.station_counts.fuels;
    $scope.total = $scope.http.xhr.response.station_counts.total;
    $scope.stations = $scope.http.xhr.response.fuel_stations;

    console.log("xhr.status: " + $scope.http.xhr.status);
    console.log("xhr.statusText: "+ $scope.http.xhr.statusText);

}]);
