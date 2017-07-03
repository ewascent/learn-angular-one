/*jslint white:true*/
/*global angular, XMLHttpRequest,this, console, XDomainRequest*/

angular
  .module('myApp')
    //.service('getXhrFactory', function(){
    .factory('getXhrFactory', function (){
        'use strict';
        //object to attach functions to
        var service = {};

        service.xreq = function (method, url, withCredentials, contentType) {

            var xhr = new XMLHttpRequest(); //set XDomainRequest
            xhr.withCredentials = withCredentials;
            xhr.open(method, url, withCredentials);
            xhr.setRequestHeader('Content-Type', contentType);
            xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
            console.log('withCredentials in xhr: ' + xhr.withCredentials);

            return xhr;
        };

        service.callXreq = function (xreq){
          var xhr = xreq;
          xhr.send();
          return xhr;
        };

        return service;
      });
