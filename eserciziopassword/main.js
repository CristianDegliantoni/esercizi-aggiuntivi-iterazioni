//L'utente ha 3 tentativi per indovinare la password.
//  Stampa "Benvenuto" se riesce nei tentativi consentiti, altrimenti "Bloccato"


// 1. Password segreta da indovinare
const passwordCorretta = "boolean123";
// Flag per memorizzare se l'accesso è andato a buon fine
let accessoRiuscito = false;
// 2. Ciclo di massimo 3 tentativi
for (let i = 0; i < 3; i++) {
    const passwordInserita = prompt(`Tentativo ${i} di 3 - Inserisci la password:`);
    if (passwordInserita === passwordCorretta) {
        accessoRiuscito = true;
        break; // Interrompe il ciclo immediatamente
    }
}
// 3. Controllo finale all'uscita dal ciclo
if (accessoRiuscito) {
    console.log("Benvenuto");
} else {
    console.log("Bloccato");
}