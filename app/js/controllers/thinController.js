/*jslint white:true*/
/*global angular,console*/
angular
  .module('myApp')
  .controller('ThinController', function ThinController($scope, getXhrFactory) {
    'use strict';

    var api = 'https://api.data.gov/nrel/alt-fuel-stations/v1.json?&api_key=',
        api_key = 'pCvPNRrbY4MMSEOwjbHEvrncKyizOgikI90rLoPV',
        api_limit = '&limit=50',
        api_state = '&state=AL,TX,CA',
        url =  api.concat(api_key,api_state, api_limit),
        formatter = null,

        xreq = getXhrFactory.xreq("GET", url, false, 'application/json'),
        xhr = getXhrFactory.callXreq(xreq);

        $scope.url = url;
        $scope.xhr = xhr;

        formatter = angular.fromJson(xhr.response);
        $scope.fuels = formatter.station_counts.fuels;
        $scope.total = formatter.station_counts.total;
        $scope.stations = formatter.fuel_stations;

        console.log("xhr.status: " + xhr.status);
        console.log("xhr.statusText: "+ xhr.statusText);
});
