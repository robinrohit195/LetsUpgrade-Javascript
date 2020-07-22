//create a for loop to count from 0 to 100
for (let numCount = 0; numCount <= 100; numCount++)
{
    //number is divisible by 3 and divisible by 5 print FizzBuzz*/
     if ((numCount % 3 == 0) && (numCount % 5 == 0))
     {
       console.log ("FizzBuzz" + " " + numCount); 
    //number is divisible by 5 print Buzz
     } else if (numCount % 5 == 0) 
     {
      console.log("Buzz" + " " + numCount);
    //number is divisible by 3 print Fizz
     } else if (numCount % 3 == 0)
     {
       console.log("fizz" + " " + numCount);
     } else 
     {
    //Other Conditions
    console.log (numCount);
     }
}