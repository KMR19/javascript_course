// https://www.tutorialrepublic.com/javascript-tutorial/javascript-form-validation.php

function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

function validateForm() {

    var name = document.applicationForm.name.value;
    var email = document.applicationForm.email.value;
    var password = document.applicationForm.password.value;
    var confirmpassword = document.applicationForm.confirmpassword.value;
    var mobile = document.applicationForm.mobile.value;
    var country = document.applicationForm.country.value;
    var gender = document.applicationForm.gender.value;

    var hobbies = [];
    var checkboxes = document.getElementsByName("hobbies[]");
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            hobbies.push(checkboxes[i].value);
        }
    }

    var nameError = passwordError = confirmPasswordError = emailError = mobileError = countryError = genderError = hobbiesError = true;

    if (name == "") {
        printError("nameError", "Please enter your name");
    } else if (name.charAt(0) == " ") {
        printError("nameError", "Name cannot start with leading spaces");
    } else {
        printError("nameError", "");
        nameError = false;
    }

    atPos = email.indexOf("@");
    dotPos = email.lastIndexOf(".");
    if (email == "") {
        printError("emailError", "Please enter your email address");
    } else if (atPos < 1 || (dotPos < (atPos + 2)) || ((dotPos + 2) >= email.length)) {
        printError("emailError", "Please enter a valid email address");
    } else {
        printError("emailError", "");
        emailError = false;
    }

    if (password == "") {
        printError("passwordError", "Please enter your password");
    } else if (password.length < 6) {
        printError("passwordError", "Password must be at least 6 characters long");
    } else {
        printError("passwordError", "");
        passwordError = false;
    }


    if (confirmpassword == "") {
        printError("confirmPasswordError", "Please enter your confirm password");
    } else if (password != confirmpassword) {
        printError("confirmPasswordError", "password must be same!");
    } else {
        printError("confirmPasswordError", "");
        confirmPasswordError = false;
    }

    if (mobile == "") {
        printError("mobileError", "Please enter your mobile number");
    } else if (isNaN(mobile) || mobile.length != 10) {
        printError("mobileError", "Please enter a valid 10 digit mobile number");
    } else {
        printError("mobileError", "");
        mobileError = false;
    }


    if (country == "Select") {
        printError("countryError", "Please select your country");
    } else {
        printError("countryError", "");
        countryError = false;
    }

    if (gender == "") {
        printError("genderError", "Please select your gender");
    } else {
        printError("genderError", "");
        genderError = false;
    }

    if (hobbies == "") {
        printError("hobbiesError", "Please select your hobbies");
    } else {
        printError("hobbiesError", "");
        hobbiesError = false;
    }

    if ((nameError || passwordError || confirmPasswordError || emailError || mobileError || countryError || genderError || hobbiesError) == true) {
        return false;
    } else {

        var dataPreview = "You've entered the following details: \n" +
            "Full Name: " + name + "\n" +
            "Email Address: " + email + "\n" +
            "Mobile Number: " + mobile + "\n" +
            "Country: " + country + "\n" +
            "Gender: " + gender + "\n";
        if (hobbies.length) {
            dataPreview += "Hobbies: " + hobbies.join(", ");
        }

        alert(dataPreview);
    }
};