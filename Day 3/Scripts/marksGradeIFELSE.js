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
        var avg = (Avgmarks/marksArray.length);
}
console.log("Average Marks: " + avg);

        if (avg < 60)
                {
          console.log("Grade : F");      
                } 
        else if (avg < 70) 
                {
                console.log("Grade : D"); 
                } 
        else if (avg < 80) 
                {
                console.log("Grade : C"); 
                } 
        else if (avg < 90) 
                {
                console.log("Grade : B"); 
                } 
    else if (avg < 100) 
                {
                console.log("Grade : A"); 
                }