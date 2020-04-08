function alertTime() {
    alert("Current time is " + Date());
}

function changeText() {
    document.getElementById("text").innerHTML = "You Clicked Me!";
}

function changeDblClickText() {
    document.getElementById("dblclicktext").innerHTML = "I was Double Clicked!";
}

function mouseDown() {
    document.getElementById("textone").innerHTML = "The mouse button held down";
}

function mouseUp() {
    document.getElementById("textone").innerHTML = "You released the mouse button";
}

function mouseDownChangeColor() {
    document.getElementById("texttwo").style.color = "red";
}

function mouseUpChangeColor() {
    document.getElementById("texttwo").style.color = "yellow";
}

function mouseOverChangeColor() {
    document.getElementById("textthree").style.color = "red";
}

function mouseOutChangeColor() {
    document.getElementById("textthree").style.color = "yellow";
}

function mouseOverBigImage() {
    var image = document.getElementById("image");
    image.style.height = "128px";
    image.style.width = "128px";
}

function mouseOutNormalImage() {
    var image = document.getElementById("image");
    image.style.height = "64px";
    image.style.width = "64px";
}

var counter = 0;

function mouseMove() {
    document.getElementById("counter").innerHTML = counter += 1;
}

function mouseWheel() {
    document.getElementById("mydiv").style.fontSize = "25px";
}