const kmDaPercorrere = parseInt(
  prompt('Selezionare i km da percorrere nella tratta scelta')
);
const etaAnagrafica = parseInt(prompt('Inserisci la tua età'));
let prezzoBiglietto = kmDaPercorrere * 0.21;

if (etaAnagrafica < 18) {
  prezzoBiglietto = prezzoBiglietto * 0.8;
  console.log(
    'Il prezzo del biglietto scelto è: ' + prezzoBiglietto.toFixed(2)
  );
} else if (etaAnagrafica >= 65) {
  prezzoBiglietto = prezzoBiglietto * 0.6;

  console.log(
    'Il prezzo del biglietto scelto è: ' + prezzoBiglietto.toFixed(2)
  );
} else {
  console.log(
    'Il prezzo del biglietto scelto è: ' + prezzoBiglietto.toFixed(2)
  );
}
