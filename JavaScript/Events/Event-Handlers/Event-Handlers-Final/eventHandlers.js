function displayDate() {
    alert(Date());
}

function displayMessage() {
    alert("Welcome to JavaScript");
}

function displayMouseOver() {
    alert("Moused Over!");
}

function displayRandomNumber() {
    alert("Random Number: " + Math.floor(Math.random() * 100));
}

document.getElementById("myBtn").onclick = displayMessage;

document.getElementById("myBtn1").onclick = displayDate;
document.getElementById("myBtn1").onclick = displayMessage;

var button = document.getElementById("myBtn2");
button.addEventListener("click", displayDate);
button.addEventListener("click", displayMessage);
button.addEventListener("mouseover", displayMouseOver);
button.removeEventListener("mouseover", displayMouseOver);

// window.addEventListener("load", displayRandomNumber);
