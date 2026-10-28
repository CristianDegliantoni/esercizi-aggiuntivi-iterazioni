

//Chiedi all'utente di inserire i suoi voti. Stampa la media.



// Chiedi all'utente quanti voti deve inserire
const numeroVoti = Number(prompt("Quanti voti vuoi inserire?"));
let somma = 0;
// Il ciclo si ripete esattamente "numeroVoti" volte
for (let i = 1; i <= numeroVoti; i++) {
    const voto = Number(prompt(`Inserisci il voto ${i}:`));
    somma += voto;
}
// Fuori dal ciclo calcoliamo la media
const media = somma / numeroVoti;
console.log("La media dei tuoi voti è: " + media);


//TIP

//Usando il template literal con i backtick (`Inserisci il voto ${i}:`),
// il prompt mostrerà comodamente all'utente il numero del voto attuale:
//  "Inserisci il voto 1:", "Inserisci il voto 2:", ecc.