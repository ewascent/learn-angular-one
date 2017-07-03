/*jslint white:true*/
/*global angular, XMLHttpRequest,console, XDomainRequest*/
  angular
    .module('myApp')
      .factory("FuelFactory",function(){
        'use strict';

        function xreq(method, uri, withCredentials, contentType) {
            var xhr = new XMLHttpRequest(); //set XDomainRequest
            xhr.withCredentials = withCredentials;
            xhr.open(method, uri, withCredentials);
            xhr.setRequestHeader('Content-Type', contentType);
            xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
            console.log('withCredentials in xhr: ' + xhr.withCredentials);
            return xhr;
        }

        return { xreq : xreq};
      });
