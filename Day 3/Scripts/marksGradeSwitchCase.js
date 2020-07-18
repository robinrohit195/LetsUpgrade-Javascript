var marksArray = [];                               // define our array
for (var i = 0; i < 5; i++) {              // loop 5 times
  marksArray.push(prompt('Enter marks ' + (i+1))); // push the value into the array
}
for (i = 0; i < marksArray.length; i++)
  document.writeln((i+1) + ": " + marksArray[i]);

//alert('Full array: ' + marksArray.join(', '));     // alert the results
var Avgmarks = 0;

for (var i=0; i < marksArray.length; i++) 
{
        Avgmarks += parseInt(marksArray[i],10);
        var score = (Avgmarks/marksArray.length);
}
console.log("Average Marks: " + score);
   var gscore;
   switch(true) 
   {
   case (score <= 100 && score >= 90):
      gscore = 'A';
       break;
   case (score <= 89 && score >= 80):
       gscore = 'B';
        break;
   case (score <= 79 && score >= 70):
       gscore = 'C';
        break;
      case (score <= 69 && score >= 60):
       gscore = 'D';
        break;
   case (score <= 59 && score >= 0):
       gscore = 'F';
       break;
      case (score > 100 && score < 0):
       gscore = 'INVALID SCORE';
       break; 
   default:
     alert('INVALID SCORE');
      }
             console.log(gscore);

