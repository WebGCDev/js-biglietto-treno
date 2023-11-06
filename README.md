Testo dell'esercizio da svolgere:

```
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero

Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
Questo richiederà un minimo di ricerca.
```

---

Come affronterò il problema e come ho pensato di svolgerlo:

1. Dichiariamo una variabile const **kmDaPercorrere** tramite prompt, usando _parseInt()_ per rimodulare la stringa in numero. Il cliente deciderà e inserirà i km che intendere percorrere nella tratta scelta.

2. Dichiariamo una variabile const **etaAnagrafica** tramite prompt, usando _parseInt()_ per rimodulare la stringa in numero. Il cliente qui dovrà inserire la propria età anagrafica

3. Dopo aver eseguito le due variabili avremo il totale del prezzo,dichiarando una variabile di tipo let **prezzoBiglietto** (importante notare come sia di tipo Let perchè in futuro sarà possibile applicare la scontistica desiderata ), il risultato sarà ottenuto tra il prodotto **kmDaPercorrere** e il fattore che non può essere assolutamente modificato essendo un valore fisso del prezzo al Km (pari a **€0.21** )

4. Nel testo dell'esercizio sono "imposte" tre regole, saranno le nostre condizioni:

- va applicato uno sconto del 20% per i minorenni (se **etaAnagrafica** è < di "18"), avremo il valore che verrà definita dalla seguente operazione **prezzoBiglietto** scontato del 20%
- Se ci troveremo nella situazione dove non ci sono da applicare sconti il **prezzoBiglietto** sarà erogato senza l'applicazione di scontistica.
- va applicato uno sconto del 40% per gli over 65(se **etaAnagrafica** è >= di "65"), avremo il valore che verrà definita dalla seguente operazione **prezzoBiglietto** scontato del 40%

5. usando in console il valore **prezzoBiglietto**, applicheremo il metodo _toFixed()_ che ci permetterà di selezionare il numero del prezzo finale con massimo 2 decimali per indicare i centesimi sul prezzo. Il biglietto verrà erogato dando una nomenclatura precedente : " Il prezzo del biglietto scelto è: "
