//Il computer sceglie un numero segreto (es. 7).
//  Chiedi all'utente di indovinarlo. Continua finché l'utente non indovina il numero corretto.



//const numeroSegreto = 7  metodo più veloce stabilisco io il numero

const numeroSegreto = Math.floor(Math.random() * 10) + 1; //genera un numero da 1 a 100

let numeroUtente = Number(prompt("indovina il numero segreto: ", "1"));

while (numeroUtente != numeroSegreto) {
    console.log("ritenta!")
    numeroUtente = Number(prompt("Sbagliato! Inserisci un altro numero: "));

}
console.log("complimenti! numero indovinato: " + numeroSegreto)
