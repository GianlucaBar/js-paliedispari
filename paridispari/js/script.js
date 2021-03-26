// creo funzione generatore numeri random 
function randomGenerator( min, max){
    randomNumber = Math.floor(Math.random() * max) + min;

    return randomNumber;
}

// creo funzione per sommare due numeri e ritornare se il risultato e' pari o dispari 
function evenOdd( num1, num2 ){
    somma = num1 + num2;

    if( somma % 2 == 0){
        return 'pari';
    } else {
        return 'dispari'
    }   
}
//////////////////////////////////////////////////////////////////////////////////


// scelte giocatore 
var scelta = prompt("scegli 'pari' o 'dispari'");

var numeroUtente = parseInt(prompt("scegli un numero da 1 a 5"))

// scelta macchina 
var numeroMacchina = randomGenerator( 1, 5);

console.log(numeroMacchina);

// chiamo funzione pari/dispari 
var risultato = evenOdd( numeroUtente, numeroMacchina);

console.log(risultato);

// controllo chi ha vinto confrontando scelta utente e risultato 
if( risultato === scelta){
    alert('hai vinto')
} else {
    alert('hai perso')
}


