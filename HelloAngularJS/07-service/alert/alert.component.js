(function() {
  'use strict';

  const module = angular.module('alert.component', []);

  class AlertCtrl {
    constructor(alertService) {
      this.messages = alertService.messages;
    }

    deleteMessage(i) {
      this.messages.splice(i, 1);
    }
  }

  AlertCtrl.$inject = ['alertService'];

  module.component('afAlert', {
      controller: AlertCtrl,
      templateUrl: './alert/alert.template.html'
  });

}());
