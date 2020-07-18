var age=parseInt(prompt("Enter age"));
validate(age);

function validate(age)
{
var status = "You cannot drink" ;
if(age > 21)
{
    status = "You can drink";
}
console.log(status);
}