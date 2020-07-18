//var variable Declaration
//Scope of var is global or function level. 
//Variable declared within a function has the function level scope otherwise global scope.
//Can be re-declared multiple times using var key word and same variable name.
//Value of variable declared using var can be updated anywhere within the scope.
var name1 = "Robin";
function printName()
{
    console.log("Inside print function: name1 " + name1);
    var name2 = "Sandra";
    console.log("Inside print function: name2 " + name2);

}
printName();
console.log("Outside print function: name1 " + name1);
//scope of variable name2 is inside the function only
//console.log("Outside print function: name2 " + name2);
var name1 = "Shawn";
console.log("Resigned value of name1 " + name1);
name1 = "Nisha";
console.log("Resigned value of name1 " + name1);

//let variable Declaration
//Scope of let is block level. Here block is confined to the curly braces 
//({ and } like function, if or for blocks etc.).
//Variables declared within curly braces can not be accessed from outside the respective scopes.
//Can not be re-declared multiple times using let keyword and same variable name.
//Value of variables declared using let can also be updated anywhere within the scope.
let name1 = "Robin";
function printName()
{
    console.log("Inside print function: name1 " + name1);
    let name2 = "Sandra";
        console.log("Inside print function: name2 " + name2);
    if(1==1)
    {
        console.log("Inside if block statement: name2 " + name2);
        let name3= "Tanya";
        console.log("Inside if block statement: name3 " + name3);
    }
    console.log("Outside if block statement: name3 " + name2);

}
printName();
console.log("Outside print function: name1 " + name1);
//scope of variable name2 is inside the function only
//console.log("Outside print function: name2 " + name2);
//let name1 = "Shawn";
//console.log("Resigned value of name1 " + name1);
//name1 is already declared and in 
//name1 = "Nisha";
//console.log("Resigned value of name1 " + name1);*/

/*const
Scope of const is same as let, block level. 
Here block is confined to the curly braces ({ and }).
Variables declared within curly braces can not be 
accessed from outside the respective scopes.
Can not be re-declared multiple times using const 
keyword and same variable name.
Value can not be updated once value is assigned to a const. 
But properties can be updated.*/
const name1 = "Robin";
const obj = {x:5, y:10}
function printName()
{
    console.log("Inside print function: name1 " + name1);
    const name2 = "Sandra";
    console.log("Inside print function: name2 " + name2);

}
printName();
console.log("Outside print function: name1 " + name1);
//scope of variable name2 is inside the function only
console.log("Outside print function: name2 " + name2);
const name1 = "Shawn";
console.log("Resigned value of name1 " + name1);
name1 = "Nisha";
console.log("Resigned value of name1 " + name1);
console.log(obj);
obj.x = 10;
console.log(obj);