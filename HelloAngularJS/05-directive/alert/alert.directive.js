(function() {
  'use strict';

  const module = angular.module('alert.directive', []);

  module.directive('afAlert', function() {
    return {
      restrict: 'E',
      scope: {
        message: '='
      },
      templateUrl: './alert/alert.template.html'
    };
  })
}());
