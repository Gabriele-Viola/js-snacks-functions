/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

function howManyVowels(theWord){

    const vowels = []
    const vowelsArray=['a', 'e', 'i', 'o', 'u']
    let description
    for (let i = 0; i < theWord.length; i++) {
        const elements = theWord[i];
        if (vowelsArray.includes(theWord[i])) {
            vowels.push(elements)
            // description = `${theWord}: ${vowels.length} (${vowels})`
        }
        
    }
    return vowels.length;

}

// Invoca la funzione qui e stampa il risultato in console


console.log(howManyVowels('javascript'));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)





