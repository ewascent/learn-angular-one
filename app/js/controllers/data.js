/*jslint white:true*/
/*global angular, XMLHttpRequest,console, XDomainRequest*/
function xreq(method, uri, withCredentials, contentType) {
    'use strict';
    var xhr = new XMLHttpRequest(); //set XDomainRequest
    xhr.withCredentials = withCredentials;
    xhr.open(method, uri, withCredentials);
    xhr.setRequestHeader('Content-Type', contentType);
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    console.log('withCredentials in xhr: ' + xhr.withCredentials);
    return xhr;
}

angular.module('myApp').controller('dataController', ['$scope', function($scope) {
    'use strict';
    //var xhr = xreq("GET", 'https://api.data.gov/nrel/alt-fuel-stations/v1.json?limit=10&api_key=pCvPNRrbY4MMSEOwjbHEvrncKyizOgikI90rLoPV', false, 'application/json');
    var api = 'https://api.data.gov/nrel/alt-fuel-stations/v1.json?&api_key=',
        api_key = 'pCvPNRrbY4MMSEOwjbHEvrncKyizOgikI90rLoPV',
        api_limit = '&limit=50',
        api_state = '&state=AL,TX,CA',
        formatter = "",
        xhr = xreq("GET", api.concat(api_key).concat(api_state).concat(api_limit), false, 'application/json');

    xhr.send();

    formatter = angular.fromJson(xhr.response);
    $scope.fuels = formatter.station_counts.fuels;
    $scope.total = formatter.station_counts.total;
    $scope.stations = formatter.fuel_stations;

    console.log("xhr.status: " + xhr.status);
    console.log("xhr.statusText: "+ xhr.statusText);

}]);
