// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Come faccio a sapere se un numero è divisibile per?
// Abbiamo visto qualcosa di particolare che possiamo usare?
// Consigli del giorno:
// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
// Buon lavoro e buon divertimento!


//IMPOSTO UN CICLO CHE STAMPI 100 VOLTE
for( let i = 1; i <= 100; i++ ){

    //CALCOLO DEL RESTO 
     const rest1 = i % 3
     const rest2 = i % 5

     //CONTROLLO SE ENTRAMBI I RESTI SIANO 0 (FIZZBUZZ)
     if(rest1 === 0 && rest2 === 0){

        console.log("FizzBuzz")
        }
    
    //ALTRIMENTI SE SOLO IL PRIMO RESTO E' 0 (FIZZ)
    else if (rest1 === 0){
         console.log("Fizz")
        }
        
    //ALTRIMENTI SE SOLO IL SECONDO RESTO E' 0 (BUZZ)
    else if (rest2 === 0 ){
         console.log("Buzz")
        } 

    //ALTRIMENTI I RESTI SONO DIVERSI DA 0 (STAMPO i)
     else{
        console.log(i)
     }
}

    