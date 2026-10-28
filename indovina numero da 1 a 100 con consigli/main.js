

//Il computer pensa a un numero tra 1 e 100. L'utente indovina. 
// Dopo ogni tentativo sbagliato, il computer dice "Troppo alto" o "Troppo basso" per aiutare l'utente.




//const numeroGenerato = Math.floor(Math.random() * 100) + 1;

//let numeroTentato = ""

//while (numeroGenerato !== numeroTentato) {
//   numeroTentato = Number(prompt("inserisci il numero: "));
// if (numeroTentato > numeroGenerato) {
//    console.log("Troppo alto! Riprova.");
//  } else if (numeroTentato < numeroGenerato) {
//      console.log("Troppo basso! Riprova.");
//  } else {
//     console.log("Hai indovinato! Il numero era: " + numeroGenerato);
// }
//}

//*********************************************************************************/


const numeroGenerato = Math.floor(Math.random() * 100) + 1;
let numeroTentato;
do {
    numeroTentato = Number(prompt("Inserisci un numero da 1 a 100:"));
    if (isNaN(numeroTentato)) {
        console.log("Per favore, inserisci un numero valido!");
    } else if (numeroTentato > numeroGenerato) {
        console.log("Troppo alto! Riprova.");
    } else if (numeroTentato < numeroGenerato) {
        console.log("Troppo basso! Riprova.");
    } else {
        console.log("Hai indovinato! Il numero era: " + numeroGenerato);
    }
} while (numeroGenerato !== numeroTentato);

//risolve il problema se l'utente scrive una stinga al posto dei numeri