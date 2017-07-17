const contact = {
  prenom: 'Romain',
};

const helloPasDansContact = function(prenom) {
  return 'Bonjour ' + prenom + ' je m\'appelle ' + this.prenom;
};

console.log(helloPasDansContact('Eric')); // Bonjour Eric je m'appelle undefined
console.log(helloPasDansContact.call(contact, 'Eric')); // Bonjour Eric je m'appelle Romain
console.log(helloPasDansContact.apply(contact, ['Eric'])); // Bonjour Eric je m'appelle Romain

const helloSurContact = helloPasDansContact.bind(contact);
console.log(helloSurContact('Eric')); // Bonjour Eric je m'appelle Romain

const contactAvecAsync = {
  prenom: 'Romain',
  helloAsync: function(prenom) {
    setTimeout(() => {
      console.log('Bonjour ' + prenom + ' je m\'appelle ' + this.prenom);
    }, 1000);
  }
};

contactAvecAsync.helloAsync('Eric');