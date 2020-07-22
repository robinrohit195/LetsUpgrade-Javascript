var posNumArr = [];
var posNumber = window.prompt('Enter a Positive Number: ');
for (var i = 0; i < posNumber; i++) {
    posNumArr.push(window.prompt("Enter the " + i + " number of " + posNumber)); // push the value into the array
    console.log("The number is array " + posNumArr);
}


var oddNumArr = []
posNumArr.filter((element, index, posNumArr) => {

    if (element % 2 === 1) {

        oddNumArr.push(element ** 3)
    }
})
console.log("Cube of Odd Number is : " + oddNumArr)