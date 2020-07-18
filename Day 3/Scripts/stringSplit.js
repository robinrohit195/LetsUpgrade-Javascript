var nameofOS = window.prompt("Enter your Operating System and Version: ");
string = nameofOS.split(" ");
var stringArray = new Array();
for(var i =0; i < string.length; i++)
{
    stringArray.push(string[i]);
}
console.log("The OS name is " +  stringArray[0] + " and version is " + stringArray[1])
//for (i = 0; i < stringArray.length; i++)
  //document.writeln("The OS name is" +  stringArray[0] + "and version is" + stringArray[1]);