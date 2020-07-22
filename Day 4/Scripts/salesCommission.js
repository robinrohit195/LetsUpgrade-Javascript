var employeeArray = [];                               // define our array
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var numEmployees = window.prompt('Enter Number of Employees ');
for (var i = 0; i <= numEmployees; i++) 
{       
           for (var i = 0; i < months.length; i++)
            {
                employeeArray.push(window.prompt("Enter sales for  " + months[i] + "  is :")); // push the value into the array
                console.log("Input into array " + employeeArray);
            }
    
}

/*for (var i = 0; i < employeeArray.length; i++) 
{
var commissionnum = parseInt(employeeArray[i]);
console.log("change into int " + commissionnum);
var total_commission =+ calCommission(commissionnum);
console.log("total commission " + total_commission);    
}
console.log("last " + total_commission); */
function myForEach(employeeArray, calCommission) 
{
    for (let i = 0; i < this.length; i++) 
    {
      calCommission(employeeArray[i]);
      console.log("inside myForEach " + employeeArray[i]);
    }
}
  
  const commission_array = [];
  myForEach(commission_array, calCommission);

function calCommission(value)
{
let commission;
if(sales > 0 && sales <=5000) 
{
    commission = sales * (2/100);
} 
else if(sales > 5000 && sales <=10000) 
{ 
    commission = sales * (5/100);
}
else if(sales > 10000 && sales <=20000) 
{ 
    commission = sales * (7/100);
}
else if(sales>20000)
{
    commission = sales * (10/100);
}
else
error("Not a valid Sales");
commission_array.push(commission);
console.log("switch case " + commission);
return(commission);
}


/*employeeArray.forEach(function(value){

    calCommission(value);
 
 });
employeeArray.forEach(calcommission);
for (var i = 0; i < commission.length; i++)
{
    console.log("inside commission arrary" + commission_array);
}*/
/*console.log(commission_array);
for (var i = 0; i < commission_array.length; i++) 
{
var total_commission =+ commission_array[i];
console.log("total commission " + total_commission);    
}*/

