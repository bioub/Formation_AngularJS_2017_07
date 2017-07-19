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


angular.module('app', [])
  .controller('PrenomCtrl', PrenomCtrl);