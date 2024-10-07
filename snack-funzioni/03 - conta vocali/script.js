/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

function howManyVowels(){

    const vowels = []
    let description
    for (let i = 0; i < word.length; i++) {
        const elements = word[i];
        if (elements == 'a' || elements == 'e' || elements == 'i' || elements == 'o' || elements == 'u') {
            vowels.push(elements)
            description = `${word}: ${vowels.length} (${vowels})`
        }
        
    }
    return(description);

}

// Invoca la funzione qui e stampa il risultato in console


console.log(howManyVowels('javascript'));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)


