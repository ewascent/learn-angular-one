/*jslint white:true*/
/*global angular, XMLHttpRequest,console, XDomainRequest*/

angular.module('myApp').service('xreq', function(method, uri, withCredentials, contentType) {
  'use strict';
  var xhr = new XMLHttpRequest(); //set XDomainRequest
  xhr.withCredentials = withCredentials;
  xhr.open(method, uri, withCredentials);
  xhr.setRequestHeader('Content-Type', contentType);
  xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
  console.log('withCredentials in xhr: ' + xhr.withCredentials);
});

angular.module('myApp').factory('FuelFactory', function (xreq) {
  'use strict';

  var api = 'https://api.data.gov/nrel/alt-fuel-stations/v1.json?&api_key=',
      api_key = 'pCvPNRrbY4MMSEOwjbHEvrncKyizOgikI90rLoPV',
      api_limit = '&limit=50',
      api_state = '&state=AL,TX,CA',

      makeUrl = function (api_key,api_state,api_limit) {
        var finalUrl = api.concat(api_key).concat(api_state).concat(api_limit);
        return finalUrl;
      },

      xhr = xreq("GET", makeUrl(api_key,api_state,api_limit), false, 'application/json');

      return xhr;
  });
