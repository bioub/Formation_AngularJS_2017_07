const coords = {
  x: 10,
  y: 20,
};

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