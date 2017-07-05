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

          $scope.sortableOptions = {
             containment: '#sortable-container'
           };
          formatter = angular.fromJson(xhr.response);

//combine these two fuckers
          function json2array(json){
              var result = [];
              var keys = Object.keys(json);
              keys.forEach(function(key){
                  result.push(json[key]);
              });
              return result;
          }


                  var hasOwn = Object.prototype.hasOwnProperty;
                  Object.keys = Object_keys;
                  function Object_keys(obj) {
                      var keys = [], name;
                      for (name in obj) {
                          if (hasOwn.call(obj, name)) {
                              keys.push(name);
                          }
                      }
                      return keys;
                  };

          $scope.url = url;
          $scope.fuels = Object_keys(formatter.station_counts.fuels);//formatter.station_counts.fuels;
          $scope.total = formatter.station_counts.total;
          $scope.stations = formatter.fuel_stations;


console.log($scope.fuels);
console.log(formatter.station_counts.fuels);


});
