(function() {
  'use strict';

  class AlertService {
    constructor() {
      this.messages = [];
    }

    addMessage(msg) {
      this.messages.push(msg);
    }
  }

  const module = angular.module('alert.service', []);

  module.service('alertService', AlertService);

}());
