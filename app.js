// Creo un for loop che va da 1 a 100 e stampo i numeri in console
// Per i multipli di 3 stampo “Fizz” al posto del numero --> per capire se è multiplo di 3 uso l'operatore % 3
// per i multipli di 5 stampi Buzz
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz

for (let i = 1; i <= 100; i++) {
    // console.log(i);
    
    if ((i % 3 === 0) && (i % 5 !== 0)){
        console.log("Fizz");

    } else if ((i % 5 === 0) && (i % 3 !== 0)){
        console.log("Buzz");

    } else if ((i % 3 === 0) && (i % 5 === 0)) {
        console.log("FizzBuzz");

    } else{
        console.log(i);
    }
    
}