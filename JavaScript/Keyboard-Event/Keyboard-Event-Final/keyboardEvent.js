function keyDownAlert() {
    alert("You pressed a key inside the input field");
}

function setBackgroundColor() {
    document.getElementById("texttwo").style.backgroundColor = "red";
}

function keyUpCase() {
    var name = document.getElementById("name");
    name.value = name.value.toUpperCase();
}

function keyDownBgColor() {
    document.getElementById("textthree").style.backgroundColor = "red";
}

function keyUpBgColor() {
    document.getElementById("textthree").style.backgroundColor = "green";
}