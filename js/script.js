/**
 * Il computer deve generare 16 numeri casuali da 1 a 100 (bombe).
 * In seguito deve chiedere all’utente di inserire un numero da 1 a 100 alla volta, se il numero è presente nella lista dei numeri generati la partita termina altrimenti continua chiedendo all’utente un altro numero.
 * La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
 * Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
 * 
 * BONUS: (da fare solo se funziona tutto il resto)
all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 => tra 1 e 80
con difficoltà 2 => tra 1 e 50
 */

var bombe = [];
var maxBombe = 16;
var capacitaMax;
var numeriSafe = [];
var utente = 0;

//Bonus
var difficoltà = parseInt( prompt( "Inserisci la difficoltà tra 0 1 2" ) );

while( isNaN(difficoltà) || difficoltà < 0 || difficoltà > 2 ){
    difficoltà = parseInt( prompt( "Valore non riconosciuto!" + "\nInserisci la difficoltà tra 0 1 2" ) );
}

switch(difficoltà){
    case 0:
        capacitaMax = 100;
        break;
        case 1:
            capacitaMax = 80;
            break;
            case 2:
                capacitaMax = 50;
            }
            
var tentativi = capacitaMax - maxBombe;

//creazioni numeri bomba
while( bombe.length < maxBombe ){
    var bomba = Math.floor( Math.random() *capacitaMax ) + 1;
    if( !bombe.includes(bomba) ){
        bombe.push(bomba);
    }
}
console.log(bombe);

//inserimento numeri
while( numeriSafe.length < tentativi && !bombe.includes(utente) ){
    utente = parseInt( prompt( "Inserire un numero da 1 a " + capacitaMax + "\nTentativi indovinati: " + numeriSafe.length +  " di " + tentativi ) );

    //controllo inserimento
    while( isNaN(utente) || utente < 1 || utente > capacitaMax ){
        utente = parseInt( prompt( "Valore non valido" + "\nPerfavore inserisci un numero da 1 a " + capacitaMax ) );
    }

    //inclusione del numero utente nella lista e controllo
    if( bombe.includes(utente) ){
        alert( "Mi dispiace HAI PERSO" + "\nHai indovinato " + numeriSafe.length + " di " + tentativi );
    }else if( numeriSafe.includes(utente) ){
        alert( "Hai già inserito questo numero" + "\nNumeri da inseriti fino ad ora sono: " + numeriSafe );
    }else{
        numeriSafe.push(utente)
    }
    
    console.log(numeriSafe)
}

if( tentativi === numeriSafe.length ){
    alert("HAI VINTO!!!")
}

