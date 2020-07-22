
let num;
//loop repeatedly and ask for a number greater than 100
do 
{
    console.log("You have entered " + num + ". Loop will repeat until number is less than 100")
    num = prompt("Enter a number greater than 100?", 0);
  
} while (num <= 100 && num);
console.log("You have entered " + num + ". Loop exited number is greated than 100 ")
