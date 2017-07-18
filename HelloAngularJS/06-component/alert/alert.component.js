(function() {
  'use strict';

  const module = angular.module('alert.component', []);

  module.component('afAlert', {
      bindings: {
        message: '='
      },
      templateUrl: './alert/alert.template.html'
  });

}());
