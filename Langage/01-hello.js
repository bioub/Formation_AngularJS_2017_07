/**
 * Additionne 2 paramètres
 * @param a {number|string} Le 1er paramètre
 * @param b {number|string} Le 2e paramètre
 * @return {number} La somme
 */
const addition = (a, b) => Number(a) + Number(b);

for (let i=0; i<10; i++) {
  if (i % 2 === 0) {
    console.log(addition(i, i));
  }
}