/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

/**
 * 
 * @param {} array di parole da filtrare per iniziale 
 * @param {'string'} chart iniziale della parola
 * @returns parole dell'array che inziano per la lettera selezionata
 */

function namesFilter (array, chart){
    const element = []
    for (let i = 0; i < array.length; i++) {
        const elements = array[i];
        if (elements[0] == chart.toUpperCase()) {
            element.push(elements)
        }else if (element == 0) {
            return `No word starts with ${chart}`
        }
    }
    return element.join(", ")
}
// Invoca la funzione qui e stampa il risultato in console

console.log(namesFilter(names, "A"));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
