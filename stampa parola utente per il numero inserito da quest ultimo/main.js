
//Chiedi un numero N all'utente. Calcola la somma di tutti i numeri da 1 a N e stampa il risultato.

let numero = Number(prompt("inserisci un numero:", "20"));
let somma = 0

for (let i = 1; i <= numero; i++) {
    somma = somma + i

}
console.log("la somma da 1 a " + numero + " è " + somma);