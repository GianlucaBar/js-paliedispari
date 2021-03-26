
// funzione 
function palindromeCheck(stringa){

    // dichiaro flag = vero 
    var isPalindroma = true;

// il for deve andare avanti fino a meta' stringa e finche'il flag e'vero   
    for (i = 0; i < (stringa.length); i++ ){

        // confronto prima lettera a ultima, seconda a penultima ecc... 
        if( stringa[i] == stringa[stringa.length - i -1]){
            // se corrisponde il flag rimane vero e controlla la prossima coppia 
            isPalindroma = true;
        } else {
            // se non corrisponde il flag diventa falso e esce dal ciclo  
            isPalindroma = false;
        }
        // ritorno il valore del flag alla fine del controllo 
        return isPalindroma;
    }
}

// chiedo stringa all'utente 
var stringaUtente = prompt("scrivi una parola in lettere minuscole");


// chiamo e stampo il risultato della funzione
console.log(palindromeCheck(stringaUtente));