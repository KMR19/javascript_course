// changes the background-color when the input field gets focus.
function focusFunction() {
    document.getElementById("firstname").style.background = "yellow";
}

// transforms the input text to upper case when you leave the input field.
function blurFunction() {
    var lastname = document.getElementById("lastname");
    lastname.value = lastname.value.toUpperCase();
}

// sets the background color to yellow When you enter the input field. 
function focusSetColor() {
    document.getElementById("address").style.background = "yellow";
}

// sets the background color to red When you leave the input field.
function blurSetColor() {
    document.getElementById("address").style.background = "red";
}

// alert the value of the selected country When you select a new country from <select> element.
function changeFunction() {
    var country = document.getElementById("country").value;
    alert("You have Selected: " + country);
}

// Alert some text when the form is submitted.
function submitFunction() {
    alert("The Form was Submitted");
}

// The onreset event fires when the form is reset, which will trigger resetFunction() which alerts some text
// Alert some text when the form is reset.
function resetFunction() {
    alert("The Form was Reset");
}