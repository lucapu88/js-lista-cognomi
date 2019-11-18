// Chiedi all’utente il cognome, inseriscilo in un array con altri cognomi e stampa la lista ordinata alfabeticamente.
// Scrivi anche la posizione della lista in cui  il nuovo utente si trova.

var cognome = prompt('Ciao, per favore digita il tuo cognome'); //chiedo il cognome all'utente
console.log(cognome);
var lista = ['pippo', 'pluto', 'martufello', 'paperino', 'topolino', 'minnie']; //definisco la lista
console.log(lista);
lista.push(cognome); //inserisco il cognome digitato dall'utente nella lista
lista.sort(); //stampo la lista in ordine alfabetico
console.log(lista);
var posizione = lista.indexOf(cognome) +1; // stampo la posizione in cui si trova il cognome
console.log(posizione);
