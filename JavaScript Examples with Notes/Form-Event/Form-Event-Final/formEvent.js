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

// Alerts some text when the form is submitted.
function submitFunction() {
    alert("The Form was Submitted");
}

// The onreset event fires when the form is reset, which will trigger resetFunction() which alerts some text
// Alerts some text when the form is reset.
function resetFunction() {
    alert("The Form was Reset");
}