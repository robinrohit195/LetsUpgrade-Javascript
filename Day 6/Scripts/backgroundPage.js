// Don't use `.getElementsByClassName()`
var bg = document.querySelector('.bg');

function change() {
    // If we have run out of colors, stop the timer
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
}

// Start the timer but get a reference to it 
// so we can stop it later
var timer = setInterval(change, 5000);