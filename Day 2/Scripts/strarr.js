    //JavaScript Array Methods

    //The JavaScript method toString() converts an array to a string of (comma separated) array values.
    var progLang = ["C", "C++", "Python", "Java"];
    console.log(progLang.toString());
    //The join() method also joins all array elements into a string.
    var progLang = ["C", "C++", "Python", "Java"];
    console.log(progLang.join());
    //The pop() method removes the last element from an array:
    var progLang = ["C", "C++", "Python", "Java"];
    var output = progLang.pop();
    console.log("Pop Operation:" + output);
    //The push() method adds a new element to an array (at the end):
    var progLang = ["C", "C++", "Python", "Java"];
    progLang.push("GoLang")
    var output1 = progLang.push();
    console.log(progLang.toString());
    console.log("Push Opeartion:" + output1);
    //The shift() method removes the first array element and "shifts" all other elements to a lower index.
    progLang.shift();
    var output2 = progLang.shift();
    console.log(output2);
    console.log("Shift Operation:" + progLang.toString());
    //The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
    progLang.unshift("C#");
    console.log(progLang.toString());
    var output3 = progLang.unshift();
    console.log("Unshift Opeartion:" + output3);
    //Array elements are accessed using their index number:
    progLang[0] = "C";
    console.log("Array Index:" + progLang.toString());
    //The length property provides an easy way to append a new element to an array:
    //var progLang = ["C", "C++", "Python", "Java"];
    progLang[progLang.length] = "C++";
    console.log("Length Property:" + progLang.toString());
    //elements can be deleted by using the JavaScript operator delete:
    delete progLang[0];
    console.log("Delete Operation:" + progLang.toString());
    //The splice() method can be used to add new items to an array:
    progLang.splice(2, 0, "Pascal", "Fortran");
    console.log("Splicing Opeartion:" + progLang.toString());
    progLang.splice(0,1);
    console.log("Splicing Opeartion:" + progLang.toString());
    //The concat() method creates a new array by merging (concatenating) existing arrays:
    var arr1 = ["C", "C++"];
    var arr2 = ["Python", "R", "GoLang"];
    var arr3 = ["Fortran", "Pascal"];
    var proLang = arr1.concat(arr2, arr3);   // Concatenates arr1 with arr2 and arr3
    console.log("Array Concatenation:" + proLang);

    //JavaScript String Methods
    //The length property returns the length of a string:
    let str = "Ibra College of Technology";
    var len = str.length;
    console.log("Length of String:" + len);
    //The indexOf() method returns the index of (the position of) the first occurrence of a specified text in a string:
    var indexValue = str.indexOf('College');
    console.log("Index of:" + indexValue);
    //The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
    //Both indexOf(), and lastIndexOf() return -1 if the text is not found.
    var lastIndexValue1 = str.lastIndexOf('of');
    console.log("Last Index of:" + lastIndexValue1);
    var lastIndexValue2 = str.lastIndexOf("abc");
    console.log("Last Index of not exists:" + lastIndexValue2);
    var lastIndexValue3 = str.lastIndexOf("College",7);
    console.log("Last Index two data:" + lastIndexValue3);
    //The search() method searches a string for a specified value and returns the position of the match:
    var searchString = str.search("College");
    console.log("String Search returns:" + searchString);
 //   Extracting String Parts
//There are 3 methods for extracting a part of a string:
//slice(start, end)
//substring(start, end)
//substr(start, length)
//slice() extracts a part of a string and returns the extracted part in a new string.
let string = "C, C##, Python, Java";
var strSlice = string.slice(7, 13);
console.log("String Slice returns:" + strSlice);
var strSlice = string.slice(-12, -6);
console.log("String Slice returns:" + strSlice);
var strSlice = string.slice(-6);
console.log("String Slice returns:" + strSlice);
var strSlice = string.slice(7);
console.log("String Slice returns:" + strSlice);
//substring() is similar to slice(). 
//The difference is that substring() cannot accept negative indexes.
var substr = string.substring(7,13);
console.log("SubString returns:" + substr);
//The replace() method replaces a specified value with another value in a string:
let strrep = "Please visit Microsoft!";
var strr = strrep.replace("Microsoft", "Let'sUpgrade");
console.log("String Replace:" + strr);
//A string is converted to upper case with toUpperCase():
console.log("String Replace:" + strr.toUpperCase());
//A string is converted to lower case with toLowerCase():
console.log("String Replace:" + strr.toLowerCase());
//The concat() method can be used instead of the plus operator.
var str1 = "Let's";
var str2 = "Upgrade"
var strConcat = str1.concat(" ", str2);
console.log("String Cocatenate:" + strConcat);
//The trim() method removes whitespace from both sides of a string:
var strTrim = "   Let's Upgrade    "
console.log("String Trim:" + strTrim.trim());
//Extracting String Characters
//1.charAt(position)
//The charAt() method returns the character at a specified index (position) in a string
//2.charCodeAt(position)
console.log("Charater At:" + str.charAt(10));
console.log("Charater At:" + str.charCodeAt(10));

