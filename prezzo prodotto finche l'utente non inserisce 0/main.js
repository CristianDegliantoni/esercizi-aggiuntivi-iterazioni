
//Chiedi all'utente di inserire il prezzo di un prodotto. Continua a chiedere prezzi e sommarli al totale finché l'utente non inserisce "0" per terminare. Stampa il totale della spesa.



let totale = 0;
let prezzo = Number(prompt("Inserisci il prezzo del prodotto (0 per terminare):"));
while (prezzo !== 0) {
    totale += prezzo;
    // Chiediamo il prossimo prezzo aggiornando la variabile di controllo
    prezzo = Number(prompt("Inserisci un altro prezzo (0 per terminare):"));
}
console.log("Totale della spesa: " + totale);


//**********************************************************************************/


//let totale = 0;
//while (true) {
//   const prezzo = Number(prompt("Inserisci il prezzo del prodotto (0 per terminare):"));
// Se l'utente inserisce 0, interrompiamo il ciclo
//  if (prezzo === 0) {
//    break;
//   }
// Aggiungiamo il prezzo al totale (totale = totale + prezzo)
//   totale += prezzo;
//}
//console.log("Totale della spesa: " + totale);



//altro metodo per arrivare alla solzuione