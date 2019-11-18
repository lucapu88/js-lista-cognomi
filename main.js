// Chiedi all’utente il cognome, inseriscilo in un array con altri cognomi e stampa la lista ordinata alfabeticamente.
// Scrivi anche la posizione della lista in cui  il nuovo utente si trova.
var cognome = prompt('Ciao, per favore digita il tuo cognome');
console.log(cognome);
var lista = ['pippo', 'pluto', 'martufello', 'paperino', 'topolino', 'minnie'];
console.log(lista);
lista.push(cognome);
lista.sort();
console.log(lista);
