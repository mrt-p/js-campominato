// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

var arrayBombe = [];
var arrayNumeriUtente = [];
var numBombe = 16;
var max = 100;


while (arrayBombe.length < numBombe) {
  var numeroGenerato = getRandomNumber(1, 100);
  if (isInArray(arrayBombe, numeroGenerato) == false) {
    // oppure if (!(isInArray(arrayBombe, numeroGenerato)))
    arrayBombe.push(numeroGenerato);
  }
}

console.log(arrayBombe);

var partitaPersa = false;

while ((arrayNumeriUtente.length < (max - numBombe)) && (partitaPersa == false)) {

  do {
      var numeroUtente = parseInt(prompt('Inserisci un numero da 1 a 100'));
      var punteggio = arrayNumeriUtente.length;
  } while (isNaN(numeroUtente) || (numeroUtente < 1) || (numeroUtente > 100));
  console.log(numeroUtente);

  if (isInArray(arrayBombe, numeroUtente)) { //Caso in cui il numero corrisponde ad una bomba
    alert('Hai perso');
    alert('Punteggio: ' + punteggio);
    partitaPersa = true;
  }
  else if (isInArray(arrayNumeriUtente, numeroUtente) == false) { // Caso in cui il numero inserito dall'utente NON è un doppione, quindi lo inserisco nell'array
    arrayNumeriUtente.push(numeroUtente);
  }
  else if (isInArray(arrayNumeriUtente, numeroUtente) == true) { // Caso in cui il numero è un doppione, quindi vado oltre senza pushare
    alert('Numero già inserito. Prego inserirne un altro');
  }
  else if (arrayNumeriUtente.length == (max - numBombe)) { // Caso di vittoria
    alert('Hai vinto!');
    alert('Punteggio:' + punteggio);
  }
}

/* Sezione delle funzioni */

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function isInArray (array, value) {
  var trovato = false;

  for (var i=0; i < array.length; i++) {
    if (value == array[i]) {
      trovato = true;
      return trovato;
    }
  }
  return trovato;
}
