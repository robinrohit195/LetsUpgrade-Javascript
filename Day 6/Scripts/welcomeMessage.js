var person = prompt("Please enter your name", " ");
if (person != null) {
    document.getElementById("greeting").style.fontSize = "xx-large";
    document.getElementById("greeting").style.fontStyle = "italic";
    document.getElementById("greeting").style.color = "blue";
    document.getElementById("greeting").innerHTML = "Greetings " + person + "!";
}

document.getElementById("clock12").style.fontSize = "xx-large";
document.getElementById("clock12").style.fontStyle = "italic";
document.getElementById("clock12").style.color = "green";
document.getElementById('clock12').innerHTML = "The time is " + realTime();
//const clock24 = document.getElementById('clock24')

// Concatenate a zero to the left of every single digit time frame
function concatZero(timeFrame) {
    return timeFrame < 10 ? '0'.concat(timeFrame) : timeFrame
}

function realTime() {
    let date = new Date()
    let sec = date.getSeconds()
    let mon = date.getMinutes()
    let hr = date.getHours()
        // 12 hour time
        // If the hour equals 0 or 12, the remainder equals 0, so output 12 instead. (0 || 12 = 12)
    clock12.textContent = `${concatZero((hr % 12) || 12)} : ${concatZero(mon)} : ${concatZero(sec)} ${hr >= 12 ? 'PM' : 'AM'}`
        // 24 hour time
    clock24.textContent = `${concatZero(hr)} : ${concatZero(mon)} : ${concatZero(sec)}`
}
setInterval(realTime, 1000)

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}