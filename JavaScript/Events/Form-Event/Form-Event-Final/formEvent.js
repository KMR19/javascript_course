function focusFunction() {
    document.getElementById("firstname").style.background = "yellow";
}

function blurFunction() {
    var lastname = document.getElementById("lastname");
    lastname.value = lastname.value.toUpperCase();
}

function focusSetColor() {
    document.getElementById("address").style.background = "yellow";
}

function blurSetColor() {
    document.getElementById("address").style.background = "red";
}

function changeFunction() {
    var country = document.getElementById("country").value;
    alert("You have Selected: " + country);
}

function submitFunction() {
    alert("The Form was Submitted");
}

function resetFunction() {
    alert("The Form was Reset");
}