/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.

function letGreetings(otherNames) {

    
    if (new Date().getHours() > 13 && new Date().getHours() < 17){
        return (`Good afternoon ${otherNames}`);
        
    }else if (new Date().getHours() < 13) {
        return (`Good morning ${otherNames}`);
    }else{
        return (`Good evening ${otherNames}`);
    }
    
}

// Invoca la funzione qui e stampa il risultato in console


console.log(letGreetings('Gabriele'));

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.





