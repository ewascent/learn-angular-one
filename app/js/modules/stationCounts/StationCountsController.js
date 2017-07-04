/*jslint white:true*/
/*global angular, console*/
angular
  .module('stationCounts')
    .controller('StationCountsController', function StationCountsController($scope, stationCountsFactory) {
      'use strict';
      var formatter = "",
          api = 'https://api.data.gov/nrel/alt-fuel-stations/v1.json?&api_key=',
          api_key = 'pCvPNRrbY4MMSEOwjbHEvrncKyizOgikI90rLoPV',
          api_limit = '&limit=50',
          api_state = '&state=AL,TX,CA',
          url =  api.concat(api_key,api_state, api_limit),
          xreq = stationCountsFactory.xreq("GET", url, false, 'application/json'),
          xhr = stationCountsFactory.callXreq(xreq);

          formatter = angular.fromJson(xhr.response);

          $scope.url = url;
          $scope.status = xreq.statusText;
          $scope.fuels = formatter.station_counts.fuels;
          $scope.total = formatter.station_counts.total;
          $scope.stations = formatter.fuel_stations;
});
