// Fonctions fléchées (arrow function)
const sum = (a, b) => a + b;

// Paramètres par défaut (default param)
// Template String
const hello = (prenom = 'Inconnu') => `Hello ${prenom}`;
console.log(hello());

// REST params
const sumVariadic = (a, b, ...nbs) => {
  let sum = a + b;

  nbs.forEach(o => {
    sum += o;
  });

  return sum;
};

console.log(sumVariadic(1, 2, 3, 4)); // 10

// SPREAD Operator
const nombres1 = [5, 6];
const nombres = [2, 3, 4, ...nombres1];
console.log(sumVariadic(...nombres)); // 20

// Destructuration
const [a, b] = nombres1;
console.log(a); // 5

const coords = {
  x: 10,
};

const {x: coordX} = coords;
console.log(coordX); // 10

// Shortands
const prenom = 'Romain';
const contact = {
  prenom, // Shortand property
  hello() { // Shortand method
    return `Bonjour je m'appelle ${this.prenom}`;
  }
};

console.log(contact.hello());

const coords3d = {
  x: 10,
  y: 20,
};

// Cumulable
const {x, y, z = 30} = coords3d;