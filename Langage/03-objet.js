const coords = {
  x: 10,
  y: 20,
};

coords.z = 30;

const json = JSON.stringify(coords);
console.log(json); // {"x":10,"y":20}

const Contact = function(prenom) {
  this.prenom = prenom;
};

Contact.prototype.hello = function() {
  return 'Bonjour je m\'appelle ' + this.prenom;
};

console.log(typeof Contact); // function
console.log(typeof String); // function
console.log(typeof Number); // function
console.log(typeof Array); // function
console.log(typeof Object); // function

const romain = new Contact('Romain', 'Bohdanowicz');
console.log(typeof romain); // object
console.log(romain.prenom); // Romain
console.log(romain.hello()); // Bonjour je m'appelle Romain
console.log(romain.hasOwnProperty('prenom')); // true
console.log(romain.hasOwnProperty('hello')); // false
console.log(romain.toto); // undefined

// Boucle sur toutes les clés
for (let key in romain) {
  // Limite au clés de l'objet (et pas du prototype)
  if (romain.hasOwnProperty(key)) {
    console.log('Clé', key);
    console.log('Valeur', romain[key]);
  }
}
/*
const Voiture = function(marque) {
  this.marque = marque;
};

Voiture.prototype.demarrer = function() {
  return 'Vrrrooommm';
};
 */

class Voiture {
  constructor(marque) {
    this.marque = marque;
  }

  demarrer() {
    return 'Vrrrooommm';
  }
}

const clio = new Voiture('Renault');
console.log(clio.demarrer());
console.log(typeof Voiture); // function