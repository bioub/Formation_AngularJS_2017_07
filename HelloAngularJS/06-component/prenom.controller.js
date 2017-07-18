(function() {
  'use strict';

  class PrenomCtrl {
    constructor() {
      this.prenoms = [];
    }

    addPrenom() {
      this.prenoms.push(this.prenom);
      this.prenom = '';
    };

    removePrenom(i) {
      this.prenoms.splice(i, 1);
    };
  }

  const module = angular.module('prenom.controller', [
    'alert.component',
  ]);

  module.controller('PrenomCtrl', PrenomCtrl);
}());

