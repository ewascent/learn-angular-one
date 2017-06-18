/*jslint white:true*/
/*global angular*/
/*script to define the Angular application */
var myApp = angular.module('myApp', []),
    api = 'https://api.data.gov/nrel/alt-fuel-stations/v1.json?&api_key=',
    api_key = 'pCvPNRrbY4MMSEOwjbHEvrncKyizOgikI90rLoPV',
    api_limit = '&limit=50',
    api_state = '&state=AL,TX,CA';
