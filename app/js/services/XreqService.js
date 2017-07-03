/*jslint white:true*/
/*global angular, XMLHttpRequest,this, console, XDomainRequest*/
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

angular
  .module('myApp')
    .service('getXhrFactory', function(){
        'use strict';

        this.callXreq = function (method, uri, withCredentials, contentType){
          this.uri = uri;
          var xhr = xreq(method, uri, withCredentials, contentType);
          xhr.send();
          return xhr;
        };
      });
