/*JavaScript provides different data types to hold different types of values. 
There are two types of data types in JavaScript.
1. Primitive data type
2. Non-primitive (reference) data type
The String Data Type
The string data type is used to represent textual data (i.e. sequences of characters). 
Strings are created using single or double quotes surrounding one or more */
var a = "Let's have a cup of coffee."; // single quote inside double quotes
console.log(a);
var b = 'He said "Hello" and left.';  // double quotes inside single quotes
console.log(b);
var c = 'We\'ll never give up.';     // escaping single quote with backslash
console.log(c);
var x = 16 + "Volvo";
console.log(x);
var x = "16" + "Prado";
console.log(x);
var x = 16 + 4 + "Prado";
console.log(x);
var x = "Volvo" + 16 + 4;
console.log(x);
var x;           // Now x is undefined
console.log(x);
x = 5;           // Now x is a Number
console.log(x);
x = "Robin";      // Now x is a String
console.log(x);
var answer1 = "It's alright";             // Single quote inside double quotes
console.log(answer1);
var answer2 = "This is 'Robin'";    // Single quotes inside double quotes
console.log(answer2);
var answer3 = 'This is "Robin"';    // Double quotes inside single quotes
console.log(answer3);

/*The Number Data Type
The number data type is used to represent positive or negative numbers with or without decimal place,*/
var x1 = 34.00;     // Written with decimals
console.log(x1);
var x2 = 34;        // Written without decimals
console.log(x2);

/*This data type represents the logical entity. 
Boolean represents one of two values: true or false.*/
let dataChecked = true;
console.log(dataChecked);
let valueCounted = false;
console.log(valueCounted);

var x = 5;
var y = 5;
var z = 6;
console.log((x == y) ); // Returns true
console.log((x == z) );       // Returns false

var cars = ["Prado", "Volvo", "BMW"];
console.log(cars);
var person = {firstName:"Robin", lastName:"Rohit", age:45, eyeColor:"Black"};
console.log(person);

//special keyword denoting a null value	
let anull = null;
console.log(a);

/*A number type can also be +Infinity, -Infinity, and NaN (not a number).*/
let number1 = 3/0;
console.log(number1); // returns Infinity

let number2 = -3/0;
console.log(number2); // returns -Infinity

// strings can't be divided by numbers
let number3 = "abc"/3; 
console.log(number3);  // returns NaN

/*A BigInt number is created by appending n to the end of an integer.*/
// BigInt value
let value = 900719925124740998n;

// Adding two big integers
let value1 = value + 1n;
console.log(value1); // returns "900719925124740999n"

let valuee = 900719925124740998n;

// Error! BitInt and number cannot be added
//let valuee1 = valuee + 1; 
//console.log(valuee1); 