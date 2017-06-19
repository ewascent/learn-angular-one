/*jslint white:true*/
/*global angular, console, module*/
angular.module('eventsApp').controller('EventController', ['$scope',
    function($scope) {
        'use strict';
        var d = new Date(),
            day = d.getDate(),
            month = d.getMonth(),
            year = d.getFullYear(),
            hours = d.getHours(),
            minutes = d.getMinutes(),
            seconds = d.getSeconds(),
            ms = d.getMilliseconds() ,
            monthNames = [
              "January", "February", "March",
              "April", "May", "June", "July",
              "August", "September", "October",
              "November", "December"
            ];
        $scope.event = {
            name: 'Angular Bootcamp',
            date: day +" "+monthNames[month]+" "+ year,
            time: hours +":" + minutes +":"+ seconds +":"+ ms,
            location: {
              address: '123 Street St',
              city: 'Prague',
              state: 'GA'
            }
        };
        $scope.images = {
          cssframework: "/images/css-framework.svg"
        };
    }
]);
