// Alert some text when the user is pressing a key in the input field.
function keyDownAlert() {
    alert("You pressed a key inside the input field");
}

// set a background color when the user is pressing a key in the input field.
function setBackgroundColor() {
    document.getElementById("texttwo").style.backgroundColor = "red";
}

// transforms the character to upper case when the user releases a key in the input field.
function keyUpCase() {
    var name = document.getElementById("name");
    name.value = name.value.toUpperCase();
}

// set a background color when the user is pressing a key in the input field.
function keyDownBgColor() {
    document.getElementById("textthree").style.backgroundColor = "red";
}

// set a background color when the user is pressing a key in the input field.
function keyUpBgColor() {
    document.getElementById("textthree").style.backgroundColor = "green";
}