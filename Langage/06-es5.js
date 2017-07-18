(function() {
  'use strict';
  /*
  var Contact = function(prenom) {
    this.prenom = prenom
  };

  var romain = Contact('Romain');
   */
  //prenom = 'Romain';
  //for (i=0; i<10; i++) {}
}());

// console.log(prenom); // Romain
//console.log(i); // 10

const prenoms = ['Romain', 'Jean'];

// remplace la boucle for
prenoms.forEach(prenom => console.log(prenom));

// map => transformation
prenoms.map(prenom => prenom.toUpperCase())
  .forEach(prenom => console.log(prenom));


// filter => filtrer
prenoms.filter(prenom => prenom.length === 4)
  .map(prenom => prenom.toUpperCase())
  .forEach(prenom => console.log(prenom));