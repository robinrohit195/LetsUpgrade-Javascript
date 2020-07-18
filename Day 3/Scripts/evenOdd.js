var numberString; 
var numberInteger;
numberString = window.prompt( "Please enter an integer: ")
numberInteger = parseInt(numberString);
if (numberInteger % 2 == 0)
console.log( "This integer " + numberInteger + " is Even" );
else
console.log( "This integer " + numberInteger + " is Odd" );