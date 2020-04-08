// Alert the current date and time when the user clicks on <button> element.
function alertTime() {
    alert("Current time is " + Date());
}

// Changes the text of <button> element when the user clicks on that <button> element.
function changeText() {
    document.getElementById("text").innerHTML = "You Clicked Me!";
}

// Changes the text of <button> element when the user double-clicks on an element.
function changeDblClickText() {
    document.getElementById("dblclicktext").innerHTML = "I was Double Clicked!";
}

// changes the text of button element when the mouse button is pressed down over <button> element.
function mouseDown() {
    document.getElementById("textone").innerHTML = "The mouse button held down";
}

// changes the text of button element when the mouse button is released from <button> element.
function mouseUp() {
    document.getElementById("textone").innerHTML = "You released the mouse button";
}

// sets the color of the button text to red when the mouse button is pressed down over <button> element.
function mouseDownChangeColor() {
    document.getElementById("texttwo").style.color = "red";
}

// sets the color of the button text to yellow when the mouse button is released from <button> element.
function mouseUpChangeColor() {
    document.getElementById("texttwo").style.color = "yellow";
}

// sets the color of the button text to red when the user moves the mouse pointer over the <button> element.
function mouseOverChangeColor() {
    document.getElementById("textthree").style.color = "red";
}

// sets the color of the button text to yellow when the mouse pointer is moved out of the <button> element.
function mouseOutChangeColor() {
    document.getElementById("textthree").style.color = "yellow";
}

// changes height and width of image when the user moves the mouse pointer over the <image> element.
function mouseOverBigImage() {
    var image = document.getElementById("image");
    image.style.height = "128px";
    image.style.width = "128px";
}

// changes to initial height and width of image when the mouse pointer is moved out of the <image> element.
function mouseOutNormalImage() {
    var image = document.getElementById("image");
    image.style.height = "64px";
    image.style.width = "64px";
}


// Increments the counter When the mouse is moved over the <div> element.
var counter = 0;

function mouseMove() {
    document.getElementById("counter").innerHTML = counter += 1;
}

// sets the font-size of div to 25 pixels when you roll up or down the mouse wheel over div.
function mouseWheel() {
    document.getElementById("mydiv").style.fontSize = "25px";
}