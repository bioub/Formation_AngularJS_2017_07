(function() {
  'use strict';

  class PrenomCtrl {
    constructor(alertService) {
      this.prenoms = [];
      this.alertService = alertService;
    }

    addPrenom() {
      this.prenoms.push(this.prenom);
      this.alertService.addMessage('Le contact ' + this.prenom + ' a bien été ajouté');
      this.prenom = '';
    };

    removePrenom(i) {
      this.prenoms.splice(i, 1);
    };
  }

  const module = angular.module('prenom.controller', [
    'alert.module',
  ]);

  module.controller('PrenomCtrl', PrenomCtrl);
}());

