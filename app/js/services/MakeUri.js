/*jslint white:true*/
/*global angular, XMLHttpRequest,console, XDomainRequest*/
angular
    .module('myApp')
       .service("MakeUri",function(api,api_key,api_state,api_limit){
          'use strict';

          function makeUri() {
             var uri = api.concat(api_key).concat(api_state).concat(api_limit);
             return uri;
          }

          return { makeUri : makeUri};
});
