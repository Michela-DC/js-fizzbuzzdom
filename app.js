// Creo un for loop che va da 1 a 100 e stampo i numeri in console
// Per i multipli di 3 stampo “Fizz” al posto del numero --> per capire se è multiplo di 3 uso l'operatore % 3
// per i multipli di 5 stampi Buzz
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz
// Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta, quindi: 
    // --> nel container devo creare dei div all'intero del quale ci vado a stampare i sopraindicati elementi
    // --> per creare 100 div dentro il container devo fare in modo che a ogni giro del for si crei un div
// Applica uno stile differente a seconda del valore dell’indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5, quindi:
    // --> creo classi in css per i diversi colori di background
    // --> do le classi create nel css ai div che ho creato nel JS usando .classList.add()


const CONTAINER = document.querySelector(".container");
console.log(CONTAINER);

for (let i = 1; i <= 100; i++) {
    // console.log(i);

    const DIV = document.createElement('div');
    // creo un div nell'html usando document.createElement('div'), tra parentesi ci va il nome del tag che voglio creare, e nel js lo salvo dentro la const FIZZ    
    //essendo dentro al for loop il div verrà creato ogni volta che ricomincia il ciclo
    CONTAINER.append(DIV);
    // Vado a mettere il div creato dentro il container
    
    if ((i % 3 === 0) && (i % 5 !== 0)){
        console.log("Fizz");
        DIV.append("Fizz");
        // dentro al div scrivo Fizz tramite il metodo .append
        DIV.classList.add("fizz");
        // assegno la classe fizz usando .classList.add()

    } else if ((i % 5 === 0) && (i % 3 !== 0)){
        console.log("Buzz");
        DIV.append("Buzz");
        DIV.classList.add("buzz");

    } else if ((i % 3 === 0) && (i % 5 === 0)) {
        console.log("FizzBuzz");
        DIV.append("FizzBuzz");
        DIV.classList.add("fizz-buzz");

    } else{
        console.log(i);
        DIV.append(i);
        DIV.classList.add("number");
    } 
}

        // Vado a scrivere dentro il fizz tramite il metodo .append