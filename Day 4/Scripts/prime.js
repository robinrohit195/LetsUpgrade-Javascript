
var numberString; 
var numberInteger;
numberString = window.prompt( "Please enter an integer: ")
numberInteger = parseInt(numberString);
console.log("The prime numbers from 2 " + numberInteger);
findNextPrime:
for (let i = 2; i <= numberInteger; i++) 
{ // for each i...
    for (let j = 2; j < i; j++) 
    { // look for a divisor..
    if (i % j == 0) 
    continue findNextPrime; // not a prime, go next i
    }

  console.log( i ); // a prime
}